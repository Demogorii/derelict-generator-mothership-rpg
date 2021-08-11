export const TEMPLATE = (STORY_DATA, NAME, START_NODE) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>${NAME}</title>
<link rel="stylesheet" title="Twine CSS" href="https://pecios.netlify.app/harlowe-css.css">
</head>
<body>
<tw-story><noscript><tw-noscript>JavaScript needs to be enabled to play ${NAME}.</tw-noscript></noscript></tw-story>
<tw-storydata name="${NAME}" startnode="${START_NODE}" creator="Twine" creator-version="2.3.14" ifid="AB2E36CE-78B9-48B8-96FD-97F8545EE88A" zoom="1" format="Harlowe" format-version="3.2.2" options="" hidden><style role="stylesheet" id="twine-user-stylesheet" type="text/twine-css"></style><script role="script" id="twine-user-script" type="text/twine-javascript"></script>
${STORY_DATA}
<script title="Twine engine code" data-main="harlowe" src="https://pecios.netlify.app/harlowe-min.js"></script>
</body>
</html>
`;
