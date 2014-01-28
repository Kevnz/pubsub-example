define(["jquery", "pubsub"], function loginDefine ($) {
	var _this, rootEl;

	var _submit = function submitHandler (e) {
		e.preventDefault();
		if ($('#login-password', rootEl).val() === 'p@ssword') {
			$.publish( 'login.success');
		} else {
			$.publish( 'login.fail');
		}
	};

	/**
	 * A Login Module
	 *
	 * @param config {Object} Object literal specifying widget configuration properties.
	 *
	 * @class Main
	 * @constructor
	 * @extends Object
	 *
	 */

	/**
	 * The initialization event
	 * @event login.init 
	*/
	/**
	 * The render event
	 * @event login.render 
	*/
	/**
	 * The log in succeeded event
	 * @event login.success
	*/
	/**
	 * The log in failed event
	 * @event login.fail 
	*/

	var Login = function loginConstructor (config) {
		_this = this;

		rootEl = config || '.login';
	};

	Login.prototype.init = function() {
		
		$.publish( 'login.init');
		_this.render();
		_this.bind();
	};
	Login.prototype.render = function() {
		console.log('render');
		$(rootEl).html('<form><input type="text id="login-name"/><input type="password" id="login-password"/><button>Login</button></form>');
		$.publish( 'login.render');
	};

	Login.prototype.bind = function() {
		$('button', _this.rootEl).on('click', _submit);
	};

	Login.prototype.hide = function() {
		$(rootEl).hide();
	};
	return Login;
});