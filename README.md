# Test Activate Events

This app is installed in every [location](https://developer.zendesk.com/api-reference/apps/apps-support-api/introduction/) and outputs a notification to the Zendesk UI and to the browser's Console window when an event is detected.

Filter with 'DEBUG' in the Console window to reduce noise level and better see events as they occur.

All locations should have an app.activated event appear in the Console window.

top_bar, nav_bar, and ticket_editor locations should have pane.activated and pane.deactivated events appear.

## Getting started

Follow these steps to get a local copy up and running.

### Prerequisites

- Zendesk Command Line (ZCLI)

[Using Zendesk Command Line](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#installing-and-updating-zcli)

### Installation

1. Clone the repo

```
git clone https://github.com/example.git
```

2. Run the app.

```
zcli apps:server
```

[Testing your Zendesk app locally](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#testing-your-zendesk-app-locally)

<!-- Links to relevant resources such as help center articles or dev docs -->

## Additional Resources

- [Zendesk Apps Guide](https://developer.zendesk.com/documentation/apps/)
- [Apps Support API documentation](https://developer.zendesk.com/api-reference/apps/apps-support-api/introduction/)
- [Apps Modal Documentation](https://developer.zendesk.com/api-reference/apps/apps-support-api/modal/)

<!-- Issue reporting with link to repo issues page -->

## Issues

You can [create an issue on Github](https://github.com/zendesk/example/issues/new),
reach out in our [Developer Community](https://support.zendesk.com/hc/en-us/community/topics),
or report the issue in the [Zendesk Developers Slack group](https://docs.google.com/forms/d/e/1FAIpQLScm_rDLWwzWnq6PpYWFOR_PwMaSBcaFft-1pYornQtBGAaiJA/viewform).
