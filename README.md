# RUBBLE

## Adding a new feature
1. Go to model viewer's editor: https://modelviewer.dev/editor/
2. Upload your render, move it around to get your desired starting point, and download it
3. Put the downloaded version into a new folder in public/features. Give the folder a brief helpful name. No spaces in the folder name - use an underscore instead.
4. Update the "features" object in src/features.tsx. Add a new entry for your new thing - you can reference previous entries to get a sense of what you should do.
5. Run `git add .` to add stage your changes for commit. Run `git commit -m '...'` to commit them (update the ... with a description of what you've done). Run `git push` to push your changes to github.
6. Pushing your changes to github will trigger an action that, when complete, will deploy your changes to the website! Go here and click on the most recent action to see its progress: https://github.com/harrydshapiro/rubble-mag/actions