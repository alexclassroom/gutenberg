"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8633],{"./packages/components/src/v-stack/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>v_stack_component});var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/h-stack/hook.tsx");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedVStack(props,forwardedRef){const vStackProps=function useVStack(props){const{expanded=!1,alignment="stretch",...otherProps}=(0,use_context_system.y)(props,"VStack");return(0,hook.R)({direction:"column",expanded,alignment,...otherProps})}(props);return(0,jsx_runtime.jsx)(component.Z,{...vStackProps,ref:forwardedRef})}UnconnectedVStack.displayName="UnconnectedVStack";const VStack=(0,context_connect.Iq)(UnconnectedVStack,"VStack"),v_stack_component=VStack;try{VStack.displayName="VStack",VStack.__docgenInfo={description:"`VStack` (or Vertical Stack) is a layout component that arranges child\nelements in a vertical line.\n\n`VStack` can render anything inside.\n\n```jsx\nimport {\n\t__experimentalText as Text,\n\t__experimentalVStack as VStack,\n} from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<VStack>\n\t\t\t<Text>Code</Text>\n\t\t\t<Text>is</Text>\n\t\t\t<Text>Poetry</Text>\n\t\t</VStack>\n\t);\n}\n```",displayName:"VStack",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},alignment:{defaultValue:{value:"'stretch'"},description:"Determines how the child elements are aligned.\n\n-   `top`: Aligns content to the top.\n-   `topLeft`: Aligns content to the top/left.\n-   `topRight`: Aligns content to the top/right.\n-   `left`: Aligns content to the left.\n-   `center`: Aligns content to the center.\n-   `right`: Aligns content to the right.\n-   `bottom`: Aligns content to the bottom.\n-   `bottomLeft`: Aligns content to the bottom/left.\n-   `bottomRight`: Aligns content to the bottom/right.\n-   `edge`: Justifies content to be evenly spread out up to the main axis edges of the container.\n-   `stretch`: Stretches content to the cross axis edges of the container.",name:"alignment",required:!1,type:{name:'"center" | "inherit" | (string & {}) | "end" | "start" | "baseline" | "initial" | "left" | "right" | "top" | "bottom" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "stretch" | ... 9 more ... | "self-start"'}},spacing:{defaultValue:null,description:"The amount of space between each child element. Spacing in between each\nchild can be adjusted by using `spacing`. The value of `spacing` works as\na multiplier to the library's grid system (base of `4px`).",name:"spacing",required:!1,type:{name:"Width<string | number>"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/v-stack/component.tsx#VStack"]={docgenInfo:VStack.__docgenInfo,name:"VStack",path:"packages/components/src/v-stack/component.tsx#VStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/date-time/stories/date-time.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithEvents:()=>WithEvents,WithInvalidDates:()=>WithInvalidDates,default:()=>date_time_story});var react=__webpack_require__("./node_modules/react/index.js"),date=__webpack_require__("./packages/components/src/date-time/date/index.tsx"),time=__webpack_require__("./packages/components/src/date-time/time/index.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),component=__webpack_require__("./packages/components/src/v-stack/component.tsx");const Wrapper=(0,emotion_styled_base_browser_esm.Z)(component.Z,{target:"e1p5onf00"})({name:"1khn195",styles:"box-sizing:border-box"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function UnforwardedDateTimePicker({currentDate,is12Hour,dateOrder,isInvalidDate,onMonthPreviewed=noop,onChange,events,startOfWeek},ref){return(0,jsx_runtime.jsx)(Wrapper,{ref,className:"components-datetime",spacing:4,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(time.Z,{currentTime:currentDate,onChange,is12Hour,dateOrder}),(0,jsx_runtime.jsx)(date.Z,{currentDate,onChange,isInvalidDate,events,onMonthPreviewed,startOfWeek})]})})}UnforwardedDateTimePicker.displayName="UnforwardedDateTimePicker";const DateTimePicker=(0,react.forwardRef)(UnforwardedDateTimePicker),date_time=DateTimePicker;try{DatePicker.displayName="DatePicker",DatePicker.__docgenInfo={description:"DatePicker is a React component that renders a calendar for date selection.\n\n```jsx\nimport { DatePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDatePicker = () => {\n  const [ date, setDate ] = useState( new Date() );\n\n  return (\n    <DatePicker\n      currentDate={ date }\n      onChange={ ( newDate ) => setDate( newDate ) }\n    />\n  );\n};\n```",displayName:"DatePicker",props:{currentDate:{defaultValue:null,description:"The current date and time at initialization. Optionally pass in a `null`\nvalue to specify no date is currently selected.",name:"currentDate",required:!1,type:{name:"string | number | Date"}},onChange:{defaultValue:null,description:"The function called when a new date has been selected. It is passed the\ndate as an argument.",name:"onChange",required:!1,type:{name:"(date: string) => void"}},isInvalidDate:{defaultValue:null,description:"A callback function which receives a Date object representing a day as an\nargument, and should return a Boolean to signify if the day is valid or\nnot.",name:"isInvalidDate",required:!1,type:{name:"(date: Date) => boolean"}},onMonthPreviewed:{defaultValue:null,description:"A callback invoked when selecting the previous/next month in the date\npicker. The callback receives the new month date in the ISO format as an\nargument.",name:"onMonthPreviewed",required:!1,type:{name:"(date: string) => void"}},events:{defaultValue:{value:"[]"},description:"List of events to show in the date picker. Each event will appear as a\ndot on the day of the event.",name:"events",required:!1,type:{name:"DatePickerEvent[]"}},startOfWeek:{defaultValue:{value:"0"},description:"The day that the week should start on. 0 for Sunday, 1 for Monday, etc.",name:"startOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/date-time/index.tsx#DatePicker"]={docgenInfo:DatePicker.__docgenInfo,name:"DatePicker",path:"packages/components/src/date-time/date-time/index.tsx#DatePicker"})}catch(__react_docgen_typescript_loader_error){}try{TimePicker.displayName="TimePicker",TimePicker.__docgenInfo={description:"TimePicker is a React component that renders a clock for time selection.\n\n```jsx\nimport { TimePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTimePicker = () => {\n  const [ time, setTime ] = useState( new Date() );\n\n  return (\n    <TimePicker\n      currentTime={ date }\n      onChange={ ( newTime ) => setTime( newTime ) }\n      is12Hour\n    />\n  );\n};\n```",displayName:"TimePicker",props:{currentTime:{defaultValue:null,description:"The initial current time the time picker should render.",name:"currentTime",required:!1,type:{name:"string | number | Date"}},is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed and the time format is assumed to be `MM-DD-YYYY` (as opposed\nto the default format `DD-MM-YYYY`).",name:"is12Hour",required:!1,type:{name:"boolean"}},dateOrder:{defaultValue:{value:"'dmy'"},description:"The order of day, month, and year. This prop overrides the time format\ndetermined by `is12Hour` prop.",name:"dateOrder",required:!1,type:{name:"enum",value:[{value:'"dmy"'},{value:'"mdy"'},{value:'"ymd"'}]}},onChange:{defaultValue:null,description:"The function called when a new time has been selected. It is passed the\ntime as an argument.",name:"onChange",required:!1,type:{name:"(time: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/date-time/index.tsx#TimePicker"]={docgenInfo:TimePicker.__docgenInfo,name:"TimePicker",path:"packages/components/src/date-time/date-time/index.tsx#TimePicker"})}catch(__react_docgen_typescript_loader_error){}try{DateTimePicker.displayName="DateTimePicker",DateTimePicker.__docgenInfo={description:"DateTimePicker is a React component that renders a calendar and clock for\ndate and time selection. The calendar and clock components can be accessed\nindividually using the `DatePicker` and `TimePicker` components respectively.\n\n```jsx\nimport { DateTimePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDateTimePicker = () => {\n  const [ date, setDate ] = useState( new Date() );\n\n  return (\n    <DateTimePicker\n      currentDate={ date }\n      onChange={ ( newDate ) => setDate( newDate ) }\n      is12Hour\n    />\n  );\n};\n```",displayName:"DateTimePicker",props:{currentDate:{defaultValue:null,description:"The current date and time at initialization. Optionally pass in a `null`\nvalue to specify no date is currently selected.",name:"currentDate",required:!1,type:{name:"string | number | Date"}},isInvalidDate:{defaultValue:null,description:"A callback function which receives a Date object representing a day as an\nargument, and should return a Boolean to signify if the day is valid or\nnot.",name:"isInvalidDate",required:!1,type:{name:"(date: Date) => boolean"}},onMonthPreviewed:{defaultValue:null,description:"A callback invoked when selecting the previous/next month in the date\npicker. The callback receives the new month date in the ISO format as an\nargument.",name:"onMonthPreviewed",required:!1,type:{name:"(date: string) => void"}},events:{defaultValue:null,description:"List of events to show in the date picker. Each event will appear as a\ndot on the day of the event.",name:"events",required:!1,type:{name:"DatePickerEvent[]"}},startOfWeek:{defaultValue:{value:"0"},description:"The day that the week should start on. 0 for Sunday, 1 for Monday, etc.",name:"startOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed and the time format is assumed to be `MM-DD-YYYY` (as opposed\nto the default format `DD-MM-YYYY`).",name:"is12Hour",required:!1,type:{name:"boolean"}},dateOrder:{defaultValue:{value:"'dmy'"},description:"The order of day, month, and year. This prop overrides the time format\ndetermined by `is12Hour` prop.",name:"dateOrder",required:!1,type:{name:"enum",value:[{value:'"dmy"'},{value:'"mdy"'},{value:'"ymd"'}]}},onChange:{defaultValue:null,description:"The function called when a new date or time has been selected. It is\npassed the date and time as an argument.",name:"onChange",required:!1,type:{name:"(date: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/date-time/index.tsx#DateTimePicker"]={docgenInfo:DateTimePicker.__docgenInfo,name:"DateTimePicker",path:"packages/components/src/date-time/date-time/index.tsx#DateTimePicker"})}catch(__react_docgen_typescript_loader_error){}try{datetime.displayName="datetime",datetime.__docgenInfo={description:"DateTimePicker is a React component that renders a calendar and clock for\ndate and time selection. The calendar and clock components can be accessed\nindividually using the `DatePicker` and `TimePicker` components respectively.\n\n```jsx\nimport { DateTimePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyDateTimePicker = () => {\n  const [ date, setDate ] = useState( new Date() );\n\n  return (\n    <DateTimePicker\n      currentDate={ date }\n      onChange={ ( newDate ) => setDate( newDate ) }\n      is12Hour\n    />\n  );\n};\n```",displayName:"datetime",props:{currentDate:{defaultValue:null,description:"The current date and time at initialization. Optionally pass in a `null`\nvalue to specify no date is currently selected.",name:"currentDate",required:!1,type:{name:"string | number | Date"}},isInvalidDate:{defaultValue:null,description:"A callback function which receives a Date object representing a day as an\nargument, and should return a Boolean to signify if the day is valid or\nnot.",name:"isInvalidDate",required:!1,type:{name:"(date: Date) => boolean"}},onMonthPreviewed:{defaultValue:null,description:"A callback invoked when selecting the previous/next month in the date\npicker. The callback receives the new month date in the ISO format as an\nargument.",name:"onMonthPreviewed",required:!1,type:{name:"(date: string) => void"}},events:{defaultValue:null,description:"List of events to show in the date picker. Each event will appear as a\ndot on the day of the event.",name:"events",required:!1,type:{name:"DatePickerEvent[]"}},startOfWeek:{defaultValue:{value:"0"},description:"The day that the week should start on. 0 for Sunday, 1 for Monday, etc.",name:"startOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed and the time format is assumed to be `MM-DD-YYYY` (as opposed\nto the default format `DD-MM-YYYY`).",name:"is12Hour",required:!1,type:{name:"boolean"}},dateOrder:{defaultValue:{value:"'dmy'"},description:"The order of day, month, and year. This prop overrides the time format\ndetermined by `is12Hour` prop.",name:"dateOrder",required:!1,type:{name:"enum",value:[{value:'"dmy"'},{value:'"mdy"'},{value:'"ymd"'}]}},onChange:{defaultValue:null,description:"The function called when a new date or time has been selected. It is\npassed the date and time as an argument.",name:"onChange",required:!1,type:{name:"(date: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/date-time/index.tsx#datetime"]={docgenInfo:datetime.__docgenInfo,name:"datetime",path:"packages/components/src/date-time/date-time/index.tsx#datetime"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./packages/components/src/date-time/stories/utils.ts");const date_time_story={title:"Components/DateTimePicker",component:date_time,argTypes:{currentDate:{control:"date"},onChange:{action:"onChange",control:{type:null}}},parameters:{sourceLink:"packages/components/src/date-time",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=({currentDate,onChange,...args})=>{const[date,setDate]=(0,react.useState)(currentDate);return(0,react.useEffect)((()=>{setDate(currentDate)}),[currentDate]),(0,jsx_runtime.jsx)(date_time,{...args,currentDate:date,onChange:newDate=>{setDate(newDate),onChange?.(newDate)}})};Template.displayName="Template";const Default=Template.bind({}),WithEvents=Template.bind({});WithEvents.args={currentDate:new Date,events:[{date:(0,utils.C)(2)},{date:(0,utils.C)(4)},{date:(0,utils.C)(6)},{date:(0,utils.C)(8)}]};const WithInvalidDates=Template.bind({});WithInvalidDates.args={currentDate:new Date,isInvalidDate:utils.Q},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",...Default.parameters?.docs?.source}}},WithEvents.parameters={...WithEvents.parameters,docs:{...WithEvents.parameters?.docs,source:{originalSource:"({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",...WithEvents.parameters?.docs?.source}}},WithInvalidDates.parameters={...WithInvalidDates.parameters,docs:{...WithInvalidDates.parameters?.docs,source:{originalSource:"({\n  currentDate,\n  onChange,\n  ...args\n}) => {\n  const [date, setDate] = useState(currentDate);\n  useEffect(() => {\n    setDate(currentDate);\n  }, [currentDate]);\n  return <DateTimePicker {...args} currentDate={date} onChange={newDate => {\n    setDate(newDate);\n    onChange?.(newDate);\n  }} />;\n}",...WithInvalidDates.parameters?.docs?.source}}}}}]);