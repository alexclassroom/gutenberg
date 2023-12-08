/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { Button, __experimentalHStack as HStack } from '@wordpress/components';
import { __, sprintf, _n } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { check } from '@wordpress/icons';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { store as noticesStore } from '@wordpress/notices';
import { addFilter, removeFilter } from '@wordpress/hooks';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SaveButton from '../save-button';
import { isPreviewingTheme } from '../../utils/is-previewing-theme';
import { unlock } from '../../lock-unlock';
import { NAVIGATION_POST_TYPE } from '../../utils/constants';

const { useLocation } = unlock( routerPrivateApis );

const PUBLISH_ON_SAVE_ENTITIES = [
	{
		kind: 'postType',
		name: NAVIGATION_POST_TYPE,
	},
];

export default function SaveHub() {
	const saveNoticeId = 'site-edit-save-notice';
	const { params } = useLocation();

	const { __unstableMarkLastChangeAsPersistent } =
		useDispatch( blockEditorStore );

	const { createSuccessNotice, createErrorNotice, removeNotice } =
		useDispatch( noticesStore );

	const { dirtyCurrentEntity, countUnsavedChanges, isDirty, isSaving } =
		useSelect(
			( select ) => {
				const {
					__experimentalGetDirtyEntityRecords,
					isSavingEntityRecord,
				} = select( coreStore );
				const dirtyEntityRecords =
					__experimentalGetDirtyEntityRecords();
				let calcDirtyCurrentEntity = null;

				if ( dirtyEntityRecords.length === 1 ) {
					// if we are on global styles
					if ( params.path?.includes( 'wp_global_styles' ) ) {
						calcDirtyCurrentEntity = dirtyEntityRecords.find(
							( record ) => record.name === 'globalStyles'
						);
					}
					// if we are on pages
					else if ( params.postId ) {
						calcDirtyCurrentEntity = dirtyEntityRecords.find(
							( record ) =>
								record.name === params.postType &&
								String( record.key ) === params.postId
						);
					}
				}

				return {
					dirtyCurrentEntity: calcDirtyCurrentEntity,
					isDirty: dirtyEntityRecords.length > 0,
					isSaving: dirtyEntityRecords.some( ( record ) =>
						isSavingEntityRecord(
							record.kind,
							record.name,
							record.key
						)
					),
					countUnsavedChanges: dirtyEntityRecords.length,
				};
			},
			[ params.path, params.postType, params.postId ]
		);

	const {
		editEntityRecord,
		saveEditedEntityRecord,
		__experimentalSaveSpecifiedEntityEdits: saveSpecifiedEntityEdits,
	} = useDispatch( coreStore );

	const disabled = isSaving || ( ! isDirty && ! isPreviewingTheme() );

	// if we have only one unsaved change and it matches current context, we can show a more specific label
	let label = dirtyCurrentEntity
		? __( 'Save' )
		: sprintf(
				// translators: %d: number of unsaved changes (number).
				_n(
					'Review %d change…',
					'Review %d changes…',
					countUnsavedChanges
				),
				countUnsavedChanges
		  );

	if ( isSaving ) {
		label = __( 'Saving' );
	}

	const { homeUrl } = useSelect( ( select ) => {
		const {
			getUnstableBase, // Site index.
		} = select( coreStore );
		return {
			homeUrl: getUnstableBase()?.home,
		};
	}, [] );

	// This is only for testing purposes.
	useEffect( () => {
		addFilter(
			'edit-site.SaveButton.onClick',
			'my-plugin',
			( originalFunction ) => {
				return () => {
					// eslint-disable-next-line no-alert
					window.alert( 'Custom action' );
					originalFunction();
				};
			}
		);
		addFilter(
			'edit-site.SaveButton.label',
			'my-plugin',
			( originalLabel ) => {
				return `Custom ${ originalLabel }`;
			}
		);
		return () => {
			removeFilter( 'edit-site.SaveButton.onClick', 'my-plugin' );
			removeFilter( 'edit-site.SaveButton.label', 'my-plugin' );
		};
	}, [] );

	const saveCurrentEntity = async () => {
		if ( ! dirtyCurrentEntity ) return;

		removeNotice( saveNoticeId );
		const { kind, name, key, property } = dirtyCurrentEntity;

		try {
			if ( 'root' === dirtyCurrentEntity.kind && 'site' === name ) {
				await saveSpecifiedEntityEdits( 'root', 'site', undefined, [
					property,
				] );
			} else {
				if (
					PUBLISH_ON_SAVE_ENTITIES.some(
						( typeToPublish ) =>
							typeToPublish.kind === kind &&
							typeToPublish.name === name
					)
				) {
					editEntityRecord( kind, name, key, { status: 'publish' } );
				}

				await saveEditedEntityRecord( kind, name, key );
			}

			__unstableMarkLastChangeAsPersistent();

			createSuccessNotice( __( 'Site updated.' ), {
				type: 'snackbar',
				actions: [
					{
						label: __( 'View site' ),
						url: homeUrl,
					},
				],
				id: saveNoticeId,
			} );
		} catch ( error ) {
			createErrorNotice( `${ __( 'Saving failed.' ) } ${ error }` );
		}
	};

	return (
		<HStack className="edit-site-save-hub" alignment="right" spacing={ 4 }>
			{ dirtyCurrentEntity ? (
				<Button
					variant="primary"
					onClick={ saveCurrentEntity }
					isBusy={ isSaving }
					disabled={ isSaving }
					aria-disabled={ isSaving }
					className="edit-site-save-hub__button"
					__next40pxDefaultSize
				>
					{ label }
				</Button>
			) : (
				<SaveButton
					className="edit-site-save-hub__button"
					variant={ disabled ? null : 'primary' }
					showTooltip={ false }
					icon={ disabled && ! isSaving ? check : null }
					defaultLabel={ label }
					__next40pxDefaultSize
				/>
			) }
		</HStack>
	);
}
