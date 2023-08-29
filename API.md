# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SSMParameter <a name="SSMParameter" id="vt-ssm-param-cdk-construct.SSMParameter"></a>

#### Initializers <a name="Initializers" id="vt-ssm-param-cdk-construct.SSMParameter.Initializer"></a>

```typescript
import { SSMParameter } from 'vt-ssm-param-cdk-construct'

new SSMParameter(parent: Stack, name: string, props: SSMParameterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.Initializer.parameter.parent">parent</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.Initializer.parameter.props">props</a></code> | <code><a href="#vt-ssm-param-cdk-construct.SSMParameterProps">SSMParameterProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="vt-ssm-param-cdk-construct.SSMParameter.Initializer.parameter.parent"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `name`<sup>Required</sup> <a name="name" id="vt-ssm-param-cdk-construct.SSMParameter.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="vt-ssm-param-cdk-construct.SSMParameter.Initializer.parameter.props"></a>

- *Type:* <a href="#vt-ssm-param-cdk-construct.SSMParameterProps">SSMParameterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="vt-ssm-param-cdk-construct.SSMParameter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="vt-ssm-param-cdk-construct.SSMParameter.isConstruct"></a>

```typescript
import { SSMParameter } from 'vt-ssm-param-cdk-construct'

SSMParameter.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="vt-ssm-param-cdk-construct.SSMParameter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameter.property.parameterValue">parameterValue</a></code> | <code>string</code> | the returned parameter for the SSM Parameter. |

---

##### `node`<sup>Required</sup> <a name="node" id="vt-ssm-param-cdk-construct.SSMParameter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="vt-ssm-param-cdk-construct.SSMParameter.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="vt-ssm-param-cdk-construct.SSMParameter.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

the returned parameter for the SSM Parameter.

---


## Structs <a name="Structs" id="Structs"></a>

### SSMParameterProps <a name="SSMParameterProps" id="vt-ssm-param-cdk-construct.SSMParameterProps"></a>

#### Initializer <a name="Initializer" id="vt-ssm-param-cdk-construct.SSMParameterProps.Initializer"></a>

```typescript
import { SSMParameterProps } from 'vt-ssm-param-cdk-construct'

const sSMParameterProps: SSMParameterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameterProps.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameterProps.property.defaultValue">defaultValue</a></code> | <code>string</code> | if the parameter couldn't be found that will be the default value. |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameterProps.property.delete">delete</a></code> | <code>boolean</code> | Optional parameter for deleting the SSM Parameter if the stack gets deleted. |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameterProps.property.type">type</a></code> | <code><a href="#vt-ssm-param-cdk-construct.SSMParameterType">SSMParameterType</a></code> | The SSM Parameter type. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="vt-ssm-param-cdk-construct.SSMParameterProps.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="vt-ssm-param-cdk-construct.SSMParameterProps.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

if the parameter couldn't be found that will be the default value.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="vt-ssm-param-cdk-construct.SSMParameterProps.property.delete"></a>

```typescript
public readonly delete: boolean;
```

- *Type:* boolean
- *Default:* false

Optional parameter for deleting the SSM Parameter if the stack gets deleted.

---

##### `type`<sup>Optional</sup> <a name="type" id="vt-ssm-param-cdk-construct.SSMParameterProps.property.type"></a>

```typescript
public readonly type: SSMParameterType;
```

- *Type:* <a href="#vt-ssm-param-cdk-construct.SSMParameterType">SSMParameterType</a>

The SSM Parameter type.

SecureString is atm not supported

---



## Enums <a name="Enums" id="Enums"></a>

### SSMParameterType <a name="SSMParameterType" id="vt-ssm-param-cdk-construct.SSMParameterType"></a>

The SSM Parameter type.

SecureString is atm not supported

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameterType.STRING">STRING</a></code> | *No description.* |
| <code><a href="#vt-ssm-param-cdk-construct.SSMParameterType.STRING_LIST">STRING_LIST</a></code> | *No description.* |

---

##### `STRING` <a name="STRING" id="vt-ssm-param-cdk-construct.SSMParameterType.STRING"></a>

---


##### `STRING_LIST` <a name="STRING_LIST" id="vt-ssm-param-cdk-construct.SSMParameterType.STRING_LIST"></a>

---

