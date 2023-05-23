/*global QUnit*/

sap.ui.define([
	"compresalescentral/translationsummary/controller/translationListReport.controller"
], function (Controller) {
	"use strict";

	QUnit.module("translationListReport Controller");

	QUnit.test("I should test the translationListReport controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
