# FCC-Tribute-Page


A tribute page of George R.R Martin to the completion of the Responsive Web Design Project on FreeCodeCamp. You can find me on https://www.freecodecamp.org/shaux.

Live Server: https://shaurya-sarma.github.io/FCC-Tribute-Page/

Inspiration Credit: @Madalena.design | Codepen: https://codepen.io/Madalena-Design/full/mYNJjW

Animate.css repository: https://github.com/daneden/animate.css

## My Own CSS Methodology
By organizing styles with the SASS-preprocessor, writing styles for HTML documents becomes organized and effficient. It includes components from SMACSS, OCSS, BEM, and ACSS.

We have the [styles.scss](https://github.com/Shaurya-Sarma/FCC-Tribute-Page/blob/master/styles/styles.scss) file as the main stylesheet with branching imports. 

The styles directory is further divided into three sub directiories:
* [Common](github.com/Shaurya-Sarma/FCC-Tribute-Page/blob/master/styles/common)
* [Components](https://github.com/Shaurya-Sarma/FCC-Tribute-Page/tree/master/styles/components)
* [Pages](https://github.com/Shaurya-Sarma/FCC-Tribute-Page/tree/master/styles/pages)

### Common Directory
This includes templating stylesheets such as html styling, helper classes, SASS variables, functions, and mixins. 
* _base.scss
* _functions.scss
* _helpers.scss
* _mixins.scss
* _variables.scss

### Components Directory 
This includes indiviual stylsheets for each component of a page: navigation bars, footers, sidebars, galleries, and main content.
By splitting code into seperate sections, it is easily to make quick changes and locate certain elements or css rules.

### Pages Directory
For more wide-scale projects, with multiple pages, this allows for id selectors to make page-specific overrides. By using the BEM convention, id selectors will act as !important selector but still retain best practices. By using classes and id selectors (for overriding styles) elements won't struggle with specificity.

More information is found throughout the files. (Using px to rem conversions or @mixins to create media-query shortcuts)


