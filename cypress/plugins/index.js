/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin")
// const percyHealthCheck = require("@percy/cypress/task")
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config) // "on" is used to hook into various events Cypress emits, and "config" is the resolved Cypress config

  // on('task', percyHealthCheck) // This is the "On" task, for the use of the Percy / Cypress integration
  on('file:preprocessor', cucumber()) // This is the "On" task, for the use of the Cucumber / Cypress integration
}
