## Code examples

### Most basic

```
<Icon name="cr-logo" />
```

The most comprhensive list of icons available in arbor is in fort awesome: https://fortawesome.com/kits/27af4258/icons

## Adding new icons

New icons can be added to the fort awesome arbor kit by either uploading an icon, or picking from various icons already available on fort awesome
https://fortawesome.com/kits/27af4258

### Update arbor

1. Click on "Add" for the icon section
2. Select or upload an icon
3. Hit the "Publish" button in fort awesome to publish the change to the arbor kit

### Update the catchandrelease repo

1. Download the updated arbor kit by clicking "Download" (under the publish button)
2. Replace the icons files in `apps/assets/fonts/arbor-icons` with the newly generated copeies
3. Add the SVG file for the new icon to `app/assets/fonts/arbor-icons/svg`
4. Add the new icon name to `app/assets/stylesheets/arbor/_icons.sass`
