export const getFormItemProps = (props) => {
  const {
    id,
    init,
    showRequired,
    rules,
    labelCol,
    wrapperCol,
    label,
    form,
    editable,
    help,
    extra,
    onChange,
    ...restProps
  } = props;

  return [{
    id,
    init,
    showRequired,
    rules,
    labelCol,
    wrapperCol,
    label,
    form,
    editable,
    help,
    extra,
    onChange,
  }, restProps];
}

export const getSelectLabel = (option, optionLabel) => {
  if (typeof optionLabel === 'function') {
    return optionLabel(option);
  }
  return option[optionLabel || 'label'];
};