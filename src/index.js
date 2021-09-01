import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-ch');

export { default as Modal } from './Modal';
export { default as Image } from './Image';
export { default as Table } from './Table';
export { default as FormItem } from './FormItem';
export { default as FormInput } from './FormInput';
export { default as FormInputNumber } from './FormInputNumber';
export { default as FormCheckbox } from './FormCheckbox';
export { default as FormSwitch } from './FormSwitch';
export { default as FormLabel } from './FormLabel';
export { default as FormTextArea } from './FormTextArea';
export { default as FormRadio } from './FormRadio';
export { default as FormSelect } from './FormSelect';
export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';
export { default as FormDatePicker } from './FormDatePicker';
export { default as FormTimePicker } from './FormTimePicker';
export { default as CRUDPage } from './CRUDPage';

export { Form } from 'antd';
