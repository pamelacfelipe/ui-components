# ui-components

Playgroung for creating ui-components in `AngularJS @1.4` for study/work purpose.

## ui-form-creator

```html
<ui-form-creator ng-model="vm.form" view-mode></ui-form-creator>
```

**Params**

* `ng-model`: Model for form.
* `view-mode`: Attribute for show form created. Default: `true`.

**Supported field format**

* Text (default) 
* Datetime
* Value
* Radio button
* Checkbox

**Dependencies**

["angular-gridster": "^0.13.14"](https://github.com/ManifestWebDesign/angular-gridster)

------------

## ui-diff

```html
<ui-diff labels="vm.labels" today="vm.today" histories="vm.histories" action="vm.edit"></ui-diff>
```

**Params**

* `labels`: Show label of each historical field.
* `today`: Today history.
* `histories`: All histories.
* `action`: Action for each history.

**Dependencies**

["angular-drag-scroll": "^0.2.2"](https://github.com/jellekralt/angular-drag-scroll)   

