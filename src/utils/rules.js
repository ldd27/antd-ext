let config = {
  // `placeholder`
  input: '请输入',
  select: '请选择',
  // Rule messages
  required: '{label}不得为空',
  type: '{label}格式错误',
  max: '不得超过 {max} 个字',
  min: '不得少于 {min} 个字',
  specialChar: '{label}不能包含特殊字符或空格',
};

const ruleCreator = {
  required: (label) => ({
    required: true,
    message: config.required.replace('{label}', label),
  }),
  string: (label) => ({
    type: 'string',
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  number: (label) => ({
    pattern: /^\d+$/,
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  email: (label) => ({
    type: 'email',
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  url: (label) => ({
    type: 'url',
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  max: (max) => ({
    max,
    message: config.max.replace('{max}', max),
  }),
  min: (min) => ({
    min,
    message: config.min.replace('{min}', min),
  }),
  phone: (label) => ({
    pattern: /^1[3456789]\d{9}$/,
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  plateNum: (label) => ({
    pattern: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  id: (label) => ({ // 身份证 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  telephone: (label) => ({
    pattern: /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/,
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  ip: (label) => ({
    pattern: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
    whitespace: true,
    message: config.type.replace('{label}', label),
  }),
  specialChar: (label) => ({
    validator(rule, value, callback) {
      const containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/)

      if (!value || value === '') {
        callback();
      } else if (!containSpecial.test(value)) {
        callback();
      } else {
        callback(config.specialChar.replace('{label}', label));
      }
    },
  }),
  // specialChar: (label) => ({
  //   pattern: /[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/,
  //   whitespace: true,
  //   message: config.specialChar.replace('{label}', label),
  // }),
};

const ruleList = Object.keys(ruleCreator);

export const createRules = (label = '', id, rules = []) =>
  rules.map((rule) => {
    if (typeof rule !== 'string' || (!ruleList.includes(rule) && !ruleList.includes(rule.split('=')[0]))) return rule;
    const ruleKey = `${id}.${rule}`;

    // e.g. "required"
    if (!rule.includes('=')) {
      if (!createRules[ruleKey]) createRules[ruleKey] = ruleCreator[rule](label);
      return createRules[ruleKey];
    }
    // e.g. "max=5"
    const [key, val] = rule.split('=');
    if (!createRules[ruleKey]) createRules[ruleKey] = ruleCreator[key](Number(val));
    return createRules[ruleKey];
  });
  
export default {

}
