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
                    titles: {
                        time: '时间',
                        teacher: '导师',
                        title: '课题',
                        type: '形式',
                        address: '地址'
                    },
                    classes: [
                        {
                            time: '9月2日\n周日 9:00-12:00',
                            teacher: '张梦佳\n《拆解》\n核心作者',
                            title: '透过结构看商业论证',
                            type: '线下沙龙',
                            address: '星河明信国际创客空间\n路演厅'
                        },
                        {
                            time: '9月5日\n周三\n19:00-21:00',
                            teacher: '郭秋霖\nPQ数字认知\n系统创始人',
                            title: '人生剧本与创业选择',
                            type: '线下沙龙',
                            address: '星河明信国际创客空间\n路演厅'
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
                '<template>\n    <div class="table-responsive text-nowrap">\n        <table class="table table-sm">\n            <thead class="grey lighten-2" data-view="titles">\n            <template>\n                <tr>\n                    <th scope="col">${view.time}</th>\n                    <th scope="col">${view.teacher}</th>\n                    <th scope="col">${view.title}</th>\n                    <th scope="col">${view.time}</th>\n                    <th scope="col">${view.address}</th>\n                </tr>\n            </template>\n            </thead>\n\n            <tbody data-view="classes">\n            <template>\n                <tr>\n                    <td>${view.time}</td>\n                    <td>${view.teacher}</td>\n                    <td>${view.title}</td>\n                    <td>${view.time}</td>\n                    <td>${view.address}</td>\n                </tr>\n            </template>\n            </tbody>\n        </table>\n    </div>\n</template>';
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