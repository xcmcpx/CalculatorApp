var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var AutoShrinkingText = function (_React$Component) {_inherits(AutoShrinkingText, _React$Component);function AutoShrinkingText() {var _ref;var _temp, _this, _ret;_classCallCheck(this, AutoShrinkingText);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoShrinkingText.__proto__ || Object.getPrototypeOf(AutoShrinkingText)).call.apply(_ref, [this].concat(args))), _this), _this.
    state = {
      scale: 1 }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(AutoShrinkingText, [{ key: 'componentDidUpdate', value: function componentDidUpdate()

    {
      var node = this.node;var

      offsetWidth = node.offsetWidth;
      var parentWidth = node.offsetParent.offsetWidth;

      var scale = offsetWidth / parentWidth;

      if (scale > 1) {
        this.setState({
          scale: 1 / scale });

      } else if (this.state.scale !== 1) {
        this.setState({
          scale: 1 });

      }
    } }, { key: 'render', value: function render()
    {var _this2 = this;var
      scale = this.state.scale;
      return React.createElement('div', _extends({},
      this.props, {
        style: { transform: 'scale(${scale},${scale})' },
        ref: function ref(node) {return _this2.node = node;} }));


    } }]);return AutoShrinkingText;}(React.Component);var



Calculator = function (_React$Component2) {_inherits(Calculator, _React$Component2);function Calculator() {var _ref2;var _temp2, _this3, _ret2;_classCallCheck(this, Calculator);for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call.apply(_ref2, [this].concat(args))), _this3), _this3.
    state = {
      value: null,
      displayValue: "0",
      waitingForOperand: false,
      operator: null }, _temp2), _possibleConstructorReturn(_this3, _ret2);}_createClass(Calculator, [{ key: 'inputDigit', value: function inputDigit(


    digit) {var _state =
      this.state,displayValue = _state.displayValue,waitingForOperand = _state.waitingForOperand;

      if (waitingForOperand) {
        this.setState({
          displayValue: String(digit),
          waitingForOperand: false });

      } else {
        this.setState({
          displayValue: displayValue === '0' ? String(digit) : displayValue + digit });

      }
    } }, { key: 'inputDot', value: function inputDot()

    {var _state2 =
      this.state,displayValue = _state2.displayValue,waitingForOperand = _state2.waitingForOperand;
      if (waitingForOperand) {
        this.setState({
          displayValue: '.',
          waitingForOperand: false });

      } else {
        if (displayValue.indexOf(".") === -1) {
          this.setState({
            displayValue: displayValue + ".",
            waitingForOperand: false });

        }
      }
    } }, { key: 'clearDisplay', value: function clearDisplay()

    {
      this.setState({
        value: null,
        displayValue: '0',
        waitingForOperand: false,
        operator: null });

    } }, { key: 'performOperation', value: function performOperation(

    nextOperator) {var _state3 =
      this.state,displayValue = _state3.displayValue,operator = _state3.operator,value = _state3.value,waitingForOperand = _state3.waitingForOperand;
      var nextVal = parseFloat(displayValue);

      var operations = {
        '/': function _(preVal, nextVal) {return preVal / nextVal;},
        '*': function _(preVal, nextVal) {return preVal * nextVal;},
        '-': function _(preVal, nextVal) {return preVal - nextVal;},
        '+': function _(preVal, nextVal) {return preVal + nextVal;},
        '=': function _(preVal, nextVal) {return nextVal;} };


      if (value == null) {
        this.setState({
          value: nextVal });

      } else if (operator && waitingForOperand) {
        var currVal = value || 0;
        var compVal = operations[operator](currVal, nextVal);

        this.setState({
          value: currVal,
          displayValue: String(currVal) });

      } else if (operator) {
        var _currVal = value || 0;
        var _compVal = operations[operator](_currVal, nextVal);

        this.setState({
          value: _compVal,
          displayValue: String(_compVal) });

      }


      this.setState({
        waitingForOperand: true,
        operator: nextOperator });

    } }, { key: 'render', value: function render()

    {var _this4 = this;var
      displayValue = this.state.displayValue;
      return (
        React.createElement('div', { className: 'calculator' },
          React.createElement('pre', null, JSON.stringify(this.state, null, 2)),
          React.createElement(AutoShrinkingText, { className: 'calculator-display', id: 'display' }, displayValue),
          React.createElement('div', { className: 'calculator-keypad' },
            React.createElement('div', { className: 'input-keys' },
              React.createElement('div', { className: 'function-keys' },
                React.createElement('button', { className: 'calculator-key key-clear', id: 'clear', onClick: function onClick() {return _this4.clearDisplay();} }, 'AC'),
                React.createElement('button', { className: 'calculator-key key-clearOne', id: 'clearOne' }, 'C_'),
                React.createElement('button', { className: 'calculator-key key-percent' }, '%')),

              React.createElement('div', { className: 'digit-keys' },
                React.createElement('button', { className: 'calculator-key key-0', id: 'zero', onClick: function onClick() {return _this4.inputDigit(0);} }, '0'),
                React.createElement('button', { className: 'calculator-key key-dot', id: 'decimal', onClick: function onClick() {return _this4.inputDot();} }, '.'),
                React.createElement('button', { className: 'calculator-key key-1', id: 'one', onClick: function onClick() {return _this4.inputDigit(1);} }, '1'),
                React.createElement('button', { className: 'calculator-key key-2', id: 'two', onClick: function onClick() {return _this4.inputDigit(2);} }, '2'),
                React.createElement('button', { className: 'calculator-key key-3', id: 'three', onClick: function onClick() {return _this4.inputDigit(3);} }, '3'),
                React.createElement('button', { className: 'calculator-key key-4', id: 'four', onClick: function onClick() {return _this4.inputDigit(4);} }, '4'),
                React.createElement('button', { className: 'calculator-key key-5', id: 'five', onClick: function onClick() {return _this4.inputDigit(5);} }, '5'),
                React.createElement('button', { className: 'calculator-key key-6', id: 'six', onClick: function onClick() {return _this4.inputDigit(6);} }, '6'),
                React.createElement('button', { className: 'calculator-key key-7', id: 'seven', onClick: function onClick() {return _this4.inputDigit(7);} }, '7'),
                React.createElement('button', { className: 'calculator-key key-8', id: 'eight', onClick: function onClick() {return _this4.inputDigit(8);} }, '8'),
                React.createElement('button', { className: 'calculator-key key-9', id: 'nine', onClick: function onClick() {return _this4.inputDigit(9);} }, '9'))),


            React.createElement('div', { className: 'operator-keys' },
              React.createElement('button', { className: 'calculator-key key-div', id: 'divide', onClick: function onClick() {return _this4.performOperation("/");} }, '/'),
              React.createElement('button', { className: 'calculator-key key-mult', id: 'multiply', onClick: function onClick() {return _this4.performOperation("*");} }, '*'),
              React.createElement('button', { className: 'calculator-key key-sub', id: 'subtract', onClick: function onClick() {return _this4.performOperation("-");} }, '-'),
              React.createElement('button', { className: 'calculator-key key-add', id: 'add', onClick: function onClick() {return _this4.performOperation("+");} }, '+'),
              React.createElement('button', { className: 'calculator-key key-equals', id: 'equals', onClick: function onClick() {return _this4.performOperation("=");} }, '=')))));




    } }]);return Calculator;}(React.Component);


ReactDOM.render(
React.createElement(Calculator, null), document.getElementById("app"));