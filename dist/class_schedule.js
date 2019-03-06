//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function (factory) {

    if ((typeof define === 'function')  &&  define.amd)
        define('class_schedule', ["dom-renderer"], factory);
    else if (typeof module === 'object')
        return  module.exports = factory.call(global,require('dom-renderer'));
    else
        return  this['class_schedule'] = factory.call(self,this['dom-renderer']);

})(function (dom_renderer) {

function merge(base, path) {
  return (base + '/' + path).replace(/\/\//g, '/').replace(/[^/.]+\/\.\.\//g, '').replace(/\.\//g, function (match, index, input) {
    return input[index - 1] === '.' ? match : '';
  });
}

function outPackage(name) {
  return /^[^./]/.test(name);
}

    var require = (typeof module === 'object') ?
        function () {

            return  module.require.apply(module, arguments);
        } : (
            this.require  ||  function (name) {

                if (self[name] != null)  return self[name];

                throw ReferenceError('Can\'t find "' + name + '" module');
            }
        );

    var _include_ = include.bind(null, './');

    function include(base, path) {

        path = outPackage( path )  ?  path  :  ('./' + merge(base, path));

        var module = _module_[path], exports;

        if (! module)  return require(path);

        if (! module.exports) {

            module.exports = { };

            var dependency = module.dependency;

            for (var i = 0;  dependency[i];  i++)
                module.dependency[i] = _include_( dependency[i] );

            exports = module.factory.apply(
                null,  module.dependency.concat(
                    include.bind(null, module.base),  module.exports,  module
                )
            );

            if (exports != null)  module.exports = exports;

            delete module.dependency;  delete module.factory;
        }

        return module.exports;
    }

function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    );
}

function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
    if (
        Symbol.iterator in Object(iter) ||
        Object.prototype.toString.call(iter) === '[object Arguments]'
    )
        return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function() {
        var self = this,
            args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                );
            }
            function _throw(err) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                );
            }
            _next(undefined);
        });
    };
}

var _module_ = {
    './index.json': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            exports.default = void 0;
            var _default = [
                {
                    titles: [
                        {
                            title: '时间'
                        },
                        {
                            title: '导师'
                        },
                        {
                            title: '课题'
                        },
                        {
                            title: '形式'
                        },
                        {
                            title: '地址'
                        }
                    ],
                    classes: [
                        {
                            time: '3月17日  周日  9:00-12:00',
                            teacher: {
                                name: '冯岩',
                                title: '海川百纳商业管理有限公司 联合创始人'
                            },
                            title: '商业思维 与 女性创业',
                            type: '线下 沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '3月17日  周日  14:00-17:00',
                            teacher: {
                                name: '赵明月',
                                title: '达律师事务所 华嘉律师团队 联合创始人'
                            },
                            title: '创业公司 的 法律风险防控',
                            type: '线下 沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '3月20日  周三  19:00-21:30',
                            teacher: {
                                name: 'Tommy',
                                title: ' TOMMY & BROTHER 创始人'
                            },
                            title: '商业模式',
                            type: '线下 沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '3月24日  周日  9:00-17:00',
                            teacher: {
                                name: '邱晓虹',
                                title: ' PMInternational  总裁'
                            },
                            title: '个人天赋 发现与发挥',
                            type: '线下 沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '3月27日  周三  19:00-21:30',
                            teacher: {
                                name: '张梦佳',
                                title: ' 《拆解》  作者'
                            },
                            title: '结构思考 与 商业模式论证',
                            type: '线下  沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '3月31日  周日  9:00-12:00',
                            teacher: {
                                name: '肖龙',
                                title: '阿么 创始人'
                            },
                            title: '从品牌注册到 销售上亿的坑和方法',
                            type: '线下 沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '3月31日  周日  14:00-17:00',
                            teacher: {
                                name: '戴礼',
                                title: '联创麦博 联合创始人'
                            },
                            title: '如何找准行业差异化，进行有效定位',
                            type: '线下 沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月3日 周三 19:00-21:30',
                            teacher: {
                                name: '陈秋晖',
                                title: '久谦教育创始人'
                            },
                            title: '品牌如何 输出',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月10日 周三 19:00-21:30',
                            teacher: {
                                name: '周颖',
                                title: '成都云中山谷农业科技有限公司创始人'
                            },
                            title: '如何通过品牌升级实现业绩增长',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月14日 周日 9:00-12:00',
                            teacher: {
                                name: '吴雅阁',
                                title: '摩登艺匠创始人'
                            },
                            title: '如何打造客户的 极致体验',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月14日 周日 14:00-17:00',
                            teacher: {
                                name: '李宁川',
                                title: '黑客松 发起人'
                            },
                            title: '如何事半功倍进行项目运营',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月17日周三 19:00-21:30',
                            teacher: {
                                name: '李许珊珊',
                                title: '3E女子商学院创始人'
                            },
                            title: '如何进行有效的 市场合作',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月21日 周日 9:00-17:30',
                            teacher: {
                                name: '朱绯',
                                title: '立美皮肤管 主理人'
                            },
                            title: '如何有效 开发和 管理客户',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月24日  周三  19:00-21:30',
                            teacher: {
                                name: '熊瑶',
                                title: '51社保 成都分公司 总经理'
                            },
                            title: '人力规划 与 绩效管理',
                            type: '线下 沙龙',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '4月28日 周日 9:00-17:00',
                            teacher: {
                                name: '王婷',
                                title: '汇智广通财务咨询 创始人'
                            },
                            title: '税务基本常识 & 财务流程规范实操',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '5月5日 周日 9:00-12:00',
                            teacher: {
                                name: '鹿雯立',
                                title: '中国幸福教练联盟 发起人'
                            },
                            title: '如何进行有效沟通， 降低企业内耗',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '5月5日 周日 14:00-17:00',
                            title: '创意营销活动',
                            type: '线下 实操演练',
                            address: '小组自选商圈'
                        },
                        {
                            time: '5月8日周三 19:00-21:30',
                            teacher: {
                                name: '陈露',
                                title: '成都创客创始人'
                            },
                            title: '路演应该怎么演',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '5月12日周日 9:00-17:00',
                            teacher: {
                                name: '小佑',
                                title: '蓝计划创始人'
                            },
                            title: 'PPT策划与制作',
                            type: '线下 培训',
                            address: '星河明信国际创客 空间路演厅'
                        },
                        {
                            time: '5月19日周日 14:00-17:00',
                            title: '毕业典礼',
                            type: '毕业典礼',
                            address: '毕业典礼'
                        }
                    ]
                }
            ];
            exports.default = _default;
        }
    },
    './index.html': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            exports.default = void 0;
            var _default =
                '<template>\n    <div class="table-responsive">\n        <table class="table table-fixed table-striped table-bordered text-center">\n            <thead class="warning-color-dark text-white">\n            <tr data-view="titles">\n                <template>\n                    <th scope="col">${view.title}</th>\n                </template>\n            </tr>\n            </thead>\n\n            <tbody data-view="classes">\n            <template>\n                <tr>\n                    <td>${view.time}</td>\n                    <td hidden="${!view.teacher}">\n                        <div data-view="teacher">\n                            <template>\n                                <p>${view.name}<br>\n                                    ${view.title}</p>\n                            </template>\n                        </div>\n                    </td>\n                    <td colspan="${!view.teacher ? 2 : 1}">${view.title}</td>\n                    <td>${view.type}</td>\n                    <td>${view.address}</td>\n                </tr>\n            </template>\n            </tbody>\n        </table>\n    </div>\n</template>';
            exports.default = _default;
        }
    },
    './index': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            var _domRenderer = _interopRequireWildcard(require('dom-renderer'));

            var _index = _interopRequireDefault(require('./index.html'));

            var _index2 = _interopRequireDefault(require('./index.json'));

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule
                    ? obj
                    : {
                          default: obj
                      };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};

                    if (obj != null) {
                        for (var key in obj) {
                            if (
                                Object.prototype.hasOwnProperty.call(obj, key)
                            ) {
                                var desc =
                                    Object.defineProperty &&
                                    Object.getOwnPropertyDescriptor
                                        ? Object.getOwnPropertyDescriptor(
                                              obj,
                                              key
                                          )
                                        : {};

                                if (desc.get || desc.set) {
                                    Object.defineProperty(newObj, key, desc);
                                } else {
                                    newObj[key] = obj[key];
                                }
                            }
                        }
                    }

                    newObj.default = obj;
                    return newObj;
                }
            }

            var class_schedule = new _domRenderer.default(
                    (0, _domRenderer.parseDOM)(
                        _index.default
                    ).firstChild.innerHTML
                ),
                box = document.querySelector('#class_schedule');
            Promise.all(
                _index2.default.map(
                    /*#__PURE__*/
                    (function() {
                        var _ref = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee(data) {
                                var item;
                                return regeneratorRuntime.wrap(
                                    function _callee$(_context) {
                                        while (1) {
                                            switch (
                                                (_context.prev = _context.next)
                                            ) {
                                                case 0:
                                                    item = class_schedule.clone();
                                                    _context.next = 3;
                                                    return item.render(data);

                                                case 3:
                                                    return _context.abrupt(
                                                        'return',
                                                        item
                                                    );

                                                case 4:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    },
                                    _callee
                                );
                            })
                        );

                        return function(_x) {
                            return _ref.apply(this, arguments);
                        };
                    })()
                )
            ).then(function(list) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (
                        var _iterator = list[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next())
                            .done);
                        _iteratorNormalCompletion = true
                    ) {
                        var view = _step.value;
                        box.append.apply(
                            box,
                            _toConsumableArray(view.topNodes)
                        );
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (
                            !_iteratorNormalCompletion &&
                            _iterator.return != null
                        ) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
        }
    },
    'dom-renderer': {
        exports: dom_renderer
    }
};

    return _include_('./index');
});