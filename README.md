# Nimbla Invoice Tracker

The purpose of this application is to allow users to input invoice information which is immediately available as a list of invoices. The user is able to update the details of the invoices including whether or not they have been paid and when. They can also filter the invoices they input by their paid/unpaid status.

## Prerequistes

This application has been created using `react` as a one page app. It also uses the `classnames` library.

## Dependencies/Running

- Install dependencies using `npm install`
- The application can be built using `npm run dev`

## Notable Features

- When a payment is overdue, I have created functionality using the `classnames` library which changes the colour of the invoice. This gives the user a visual cue that they need to chase a particular payment. Equally, when a payment has been made the color changes again. I have also made sure that when a payment was made, even if it was overdue, the correct colour indicator appears.
- The project works as a one page app which gives the user all of the functionality on one screen without having to navigate and scroll to differing sections.

## Unresolved Issues/Un-implemented Features

While I'm happy with the work that I am submitting, there is more that I would have liked to do given more time to work on the project:

- I wanted to add some functionality that stopped the user from editing an invoice if certain fields hadn't been entered. This worked fine on the `SubmitInvoice.js` component with the `required` attribute added to each `input` and `textarea` but this wasn't working inside of the `EditInvoice.js`. To get around this, I passed the values of the invoice to be edited as the values of each field in order to stop the user from accidentally saving an empty invoice. This isn't an ideal solution, however, and I'd like to spend some time getting to the bottom of why `required` wasn't working how I anticipated.
- The overflow scroll on the invoices has kept the project as a one page app and given the user experience that I was intending. However, perhaps more functionality could be included if the project had been designed to have pages for the user to navigate through using a library such as `react-router`. For instance, I could have implemented the project as a dashboard with routes to submitting invoices, viewing invoices, editing invoices, etc.
- For the sake of this project I gave each invoice an ID number, but in a real world application the user may wish to enter their own invoice ID. This would require some functionality that would check whether the user input ID is unique or not. The user may also wish to delete an invoice if it was made in error.
- I added a maximum length to the textarea to stop the size and styling of the invoice displays becoming bloated or spilling over onto other containers. However, if the user really wanted to enter a long form description in that field, I could have displayed the first, say, 20 characters of the description in the `DisplayInvoice.js` component with ellipses to represent that information without comprimising the user experience.

## Acknowledgements

- `WhatFont?` and `Colorzilla` were used to get inspiration while researching and making decisions on CSS and font styles.
