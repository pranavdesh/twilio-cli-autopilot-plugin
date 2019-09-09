const listAssistants = require('./listAssistants'),
      exportAssistant = require('./exportAssistant'),
      createAssistant = require('./createAssistantFully'),
      gitTemplates = require('./get-templates'),
      deleteAssistant = require('./deleteAssistantFully'),
      updateAssistant = require('./updateAssistant'),
      customChannel = require('./customChannel'),
      bulkUploadFieldValues = require('./bulkUploadFieldValues'),
      importAssistant = require('./importAssistant'),
      importAlexaAssistant = require('./importAlexaAssistant'),
      existAssistantCheck = require('./existAssistantCheck');

module.exports = Object.assign({},
  listAssistants,
  exportAssistant,
  createAssistant,
  gitTemplates,
  deleteAssistant,
  updateAssistant,
  customChannel,
  bulkUploadFieldValues,
  importAssistant,
  importAlexaAssistant,
  existAssistantCheck
);