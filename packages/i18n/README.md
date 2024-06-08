# `@repo/i18n`

Collection of internal i18n (internationalization) helpers.

The `i18next` library is a libraries for JavaScript localization.

It's used to provide multilingual support for your application,
which in turn enhances accessibility and usability to users of varying language groups.

Key features include:

- Support for number and date formatting based on locale.
- Language detector for automatic detection of a user's language preferences.
- The ability to load language resources from your server via HTTP requests.
- Support pluralization, gendered language, etc., via special syntax.

In this project, we're exporting `i18next` alongside some helper tools
to centralize your localization operations.
By doing so, we're decoupling the localization logic from the rest of your application.
This design choice provides you with the flexibility to switch to a different
localization library in the future if needed.

With the architecture we've set up, the change would mostly be confined
to this part of the codebase, limiting the impact on the other parts of your apps.
