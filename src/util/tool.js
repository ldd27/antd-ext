export const getFormItemProps = props => {
  const {
    id,
    colon,
    dependencies,
    extra,
    getValueFromEvent,
    hasFeedback,
    help,
    htmlFor,
    noStyle,
    label,
    labelAlign,
    labelCol,
    name,
    normalize,
    required,
    rules,
    shouldUpdate,
    trigger,
    validateStatus,
    validateTrigger,
    valuePropName,
    wrapperCol,
    editable,
    before,
    after,
    show,
    ...restProps
  } = props;

  return [
    {
      id,
      colon,
      dependencies,
      extra,
      getValueFromEvent,
      hasFeedback,
      help,
      htmlFor,
      noStyle,
      label,
      labelAlign,
      labelCol,
      name,
      normalize,
      required,
      rules,
      shouldUpdate,
      trigger,
      validateStatus,
      validateTrigger,
      valuePropName,
      wrapperCol,
      editable,
      before,
      after,
      show,
    },
    restProps,
  ];
};

export const getSelectLabel = (option, optionLabel) => {
  if (typeof optionLabel === 'function') {
    return optionLabel(option);
  }
  return option[optionLabel || 'label'];
};
