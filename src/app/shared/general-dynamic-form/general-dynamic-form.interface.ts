/**
 * 表单配置数据
 * @export
 * @interface IInitFormData
 */
export interface IInitFormData extends Array<IInitFormDataItem | IInitFormDataArray | IFlexItem> {
    [index: number]: IInitFormDataItem | IInitFormDataArray | IFlexItem;
}

interface IFlexItem {
    type: string;
    labelKey?: string;
    valueKey?: string;
    extraKeys?: string[];
    nzDisabledDate?: boolean;
    nzDisabledTime?: boolean;
    showSearch?: boolean;
    asyncSearchUrl?: string;
    array?: any[];
    required?: boolean;
    extra?: string;
    formControlName?: string;
    formControlNameDouble?: string;
    returnObj?: boolean | boolean[];
    label?: IInitFormDataItemLabel;
    control?: IInitFormDataItemControl;
    controlDouble?: IInitFormDataItemControl;
    // tslint:disable-next-line:prefer-method-signature
    callback?: (v?: any) => void;
    callbackSecond?: (v?: any) => void;
}

/**
 * 表单配置formItem
 * @interface IInitFormDataItem
 */
export interface IInitFormDataItem {
    type: string;
    showSearch?: boolean;
    asyncSearchUrl?: string;
    nzDisabledDate?: boolean;
    nzDisabledTime?: boolean;
    labelKey?: string;
    valueKey?: string;
    extraKeys?: string[];
    array?: any[];
    required: boolean;
    extra?: string;
    formControlName: string;
    formControlNameDouble?: string;
    returnObj?: boolean | boolean[];
    label: IInitFormDataItemLabel;
    control: IInitFormDataItemControl;
    controlDouble?: IInitFormDataItemControl;
    // tslint:disable-next-line:prefer-method-signature
    callback?: (v?: any) => void;
    callbackSecond?: (v?: any) => void;
}
/**
 * 表单配置formArray
 * @interface IInitFormDataArray
 */
interface IInitFormDataArray {
    type: string;
    array: IInitFormDataItem[];
    asyncSearchUrl?: string;
    nzDisabledDate?: boolean;
    nzDisabledTime?: boolean;
    showSearch?: boolean;
    labelKey?: string;
    valueKey?: string;
    extraKeys?: string[];
    required?: boolean;
    extra?: string;
    formControlName?: string;
    formControlNameDouble?: string;
    returnObj?: boolean | boolean[];
    label?: IInitFormDataItemLabel;
    control?: IInitFormDataItemControl;
    controlDouble?: IInitFormDataItemControl;
    // tslint:disable-next-line:prefer-method-signature
    callback?: (v?: any) => void;
    callbackSecond?: (v?: any) => void;
}

/**
 * 表单配置label
 * @interface IInitFormDataItemLabel
 */
export interface IInitFormDataItemLabel {
  alias: string;
  width: number;
  className: string;
  /**
   * 用于栅格
   */
  span: number;
}

/**
 * 表单配置control
 * @interface IInitFormDataItemControl
 */
interface IInitFormDataItemControl {
  offset?: number;
  width: number;
  value?: string;
  widthExtra?: number;
  disabled?: boolean;
  options?: IInitFormDataItemControlOptions;
  /**
   * 用于栅格
   */
  span?: number;
}

/**
 * 表单配置control -> options
 * @interface IInitFormDataItemControlOptions
 */
interface IInitFormDataItemControlOptions {
    [index: number]: IInitFormDataItemControlOptionsItem;
}

/**
 * 表单配置control -> options -> item
 * @interface IInitFormDataItemControlOptionsItem
 */
interface IInitFormDataItemControlOptionsItem {
    [key: string]: any;
    value: string | number | boolean;
    label: string;
}
