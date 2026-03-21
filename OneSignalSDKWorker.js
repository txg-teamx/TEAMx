        // Tell OneSignal exactly who this user is
        if (window.OneSignalDeferred) {
            OneSignalDeferred.push(function(OneSignal) {
                OneSignal.login(AppState.currentUser); // Links their email/ID to their device
            });
        }
