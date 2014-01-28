define([ "app/login", "jquery", "pubsub"], function mainDefine (Login, $) {
	var _this, login;

	/**
	 * A Main App
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
	 * @event main.init 
	*/
	/**
	 * The render event
	 * @event main.render 
	*/
	var Main = function mainConstructor () {
		_this = this;
	};

	Main.prototype.init = function() {

		$.subscribe( 'login.success', function (e) {
			alert('come on in');
			login.hide();
		});
		$.subscribe( 'login.fail', function (e) {
			alert('go away');
		});
		$.subscribe( 'login.init', function (e) {
			console.log('login.init');
		});
		login = new Login();
		login.init();
	};


	return Main;
});