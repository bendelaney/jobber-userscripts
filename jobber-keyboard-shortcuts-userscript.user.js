// ==UserScript==
// @name         Jobber Keyboard Shortcuts
// @version      1.5
// @description  Keyboard shortcuts for Jobber
// @author       Ben Delaney
// @match        https://secure.getjobber.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(async function() {
    'use strict';
    
    try {
        // Fetch and execute the script directly in the userscript context
        const response = await fetch('https://raw.githubusercontent.com/bendelaney/jobber-userscripts/refs/heads/main/jobber-keyboard-shortcuts.js?v=' + Date.now());
        const scriptText = await response.text();
        
        // Execute in userscript context by eval (necessary for event listeners to work properly)
        eval(scriptText);
        
        console.log('Jobber keyboard shortcuts loaded successfully');
    } catch (error) {
        console.error('Failed to load Jobber keyboard shortcuts:', error);
    }
})();