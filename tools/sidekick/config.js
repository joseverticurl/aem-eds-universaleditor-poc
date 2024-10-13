window.hlx.initSidekick({
  project: 'aem-eds-universaleditor-poc',
  host: 'localhost',
  plugins: [
    {
      'id': 'aemedit',
      'title': 'Edit-',
      'environments': [ 'dev', 'preview', 'live' ],
      'event': 'aemedit'
    },
    {
        id: 'disable-publish',
        title: 'Disable Publish',
        environments: ['dev', 'preview', 'live'],
        condition: () => true, // Always true to disable publish button
        button: async () => {
          const publishButton = document.querySelector('[aria-label="Publish"]');
          if (publishButton) {
            publishButton.style.display = 'none';
          }
        }
    }  
  ],
});
