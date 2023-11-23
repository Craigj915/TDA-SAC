# TDA-SAC
A planned leave, sickness and absence MERN app.

# Get Wurst

<img src="static/images/readme/general/amiresponsive-mockup.png"  alt="Mockup of the Get Wurst website on a phone, tablet, laptop and monitor screen">

*Image created and taken from [Am I Responsive?](ami.responsivedesign.is).*

[View the live project here](https://ecomm-gw.herokuapp.com/).

---

## Table of contents

1. [Introduction](#Introduction)
2. [Technologies Used](#Technologies-used)
3. [UX and Design](#UX-and-design)
   - [User Stories](#User-Stories)
   - [Wireframes](#Wireframes)
   - [Database Design](#Database-design)
   - [Kanban](#Kanban) 
   - [Typography](#typography)
4. [Features](#Features)
   - [General](#General)
   - [Navigation and Header](#Navigation-and-Header)
   - [Home Page](#Home-Page)
   - [Hero Image](#Hero-Image)
   - [Our Story Box](#Our-Story-Information-Box)
   - [Menu](#Menu)
   - [Product Delete](#Product/delete)
   - [Product Edit](#Product/edit)
   - [Events](#Events)
   - [Footer](#Footer)
   - [Marketing](#Marketing)
5. [Future Features](#Features-to-Implement-in-the-future)
6. [Testing](#Testing)
7. [Bugs](#Bugs)
8. [Deployment](#Deployment)
   - [How the site was Deployed](#How-the-site-was-Deployed)
   - [How to Fork the Repository](#How-to-Fork-the-Repository)
   - [How to create a Clone](#How-to-create-a-Clone-using-SSH)
   - [Heroku](#How-to-create-a-Clone-using-SSH)
   - [Heroku](#How-to-create-a-Clone-using-SSH)
9. [Credits](#Credits)
   - [Images](#Images)
   - [Acknowledgements](#Acknowledgements)

---

# Introduction


This is a fictional website (for educational purposes) for a street food company named Get Wurst. They sell Bratwursts, Burgers and Chicken. The site can be used to view the menu, order and pay for items and view a sample of previous events the company has worked at. A Frequently Asked Questions page allows users to view previous questions and answers. If the user is logged in they can submit questions, answer previous questions and like answers.


[Back to top ⇧](#Get-Wurst)


# Technologies used


### Languages Used


+ HTML5
+ CSS3
+ JavaScript
+ jQuery
+ Python
+ Django


### Technologies and Programs Used:


+ Allauth
+ Balsamiq
+ Bootstrap 5
+ Crispy Forms
+ Django
+ Django Extensions
+ Django Phone Number Field
+ Django Storages
+ Django Summernote
+ ElephantSQL
+ Font Awesome
+ Graphviz
+ Gunicorn
+ Heroku
+ Phonenumbers
+ Pillow
+ Selenium
+ Stripe

[Back to top ⇧](#Get-Wurst)



# UX and Design


[Back to top ⇧](#Get-Wurst)


# Agile Development

## User Stories

A kanban was used to keep an agile view on user stories. This can be seen [here](https://github.com/users/mjjstockman/projects/23). User stories were added, and labels for bugs or to change
where necessary.

Three coloumns were used (To Do, In Progress and Done) and issues/user stories were moved between
the colomns as progress was made. Additional information was added throughout the process in
an agile manner.


### Themes, Epics, Related User Stories, MOSCOW


The following table was used to plan the development of the project. This helped to easily break down
Themes into Epics, their related User Stories and prioritise their importance. This will be updated as development progresses.


| Theme | Epic | Related User Stories | MOSCOW | Completed |
|--|--|--|--|--|
| Account Management | Sign up | [#15](https://github.com/mjjstockman/ecomm/issues/15) Sign up using email, username and password | Must have | Yes |
| | | [#16](https://github.com/mjjstockman/ecomm/issues/16) Sign up using Google | Should have | Yes |
| | | [#17](https://github.com/mjjstockman/ecomm/issues/17) Confirm Sign up via email | Should have | Yes |
| | Sign in | [#18](https://github.com/mjjstockman/ecomm/issues/18) Log in using username / password | Must have | Yes |
| | | [#19](https://github.com/mjjstockman/ecomm/issues/19) Login using Google | Should have | Yes |
| | | [#20](https://github.com/mjjstockman/ecomm/issues/20) Forgot sign in info | Should have | Yes |
| | | [#21](https://github.com/mjjstockman/ecomm/issues/21) Login state | Should have | Yes |
| | Log out | [#22](https://github.com/mjjstockman/ecomm/issues/22) Manual log out | Must have | Yes |
| | | [#23](https://github.com/mjjstockman/ecomm/issues/23) Automatic log out | Won't have | No |
| Products | Add products | [#24](https://github.com/mjjstockman/ecomm/issues/24) Add products through admin | Must have | Yes |
| | | [#20](https://github.com/mjjstockman/ecomm/issues/20) Add products through site | Must have |Yes |
| | View products| [#25](https://github.com/mjjstockman/ecomm/issues/25) View all products | Must have | Yes |
| | |[#26](https://github.com/mjjstockman/ecomm/issues/26) View products by category | Must have | Yes |
| | | View new products | Won't have | No |
| | | [#26](https://github.com/mjjstockman/ecomm/issues/26) Search products | Should have | Yes |
| | Edit products | [#27](https://github.com/mjjstockman/ecomm/issues/27) Edit products through site | Must have | Yes |
| | | [#37](https://github.com/mjjstockman/ecomm/issues/37) Edit products through Django admin | Must have | Yes |
| | Delete products | [#38](https://github.com/mjjstockman/ecomm/issues/38) Delete products through admin | Must have | Yes |
| | | [#28](https://github.com/mjjstockman/ecomm/issues/28) Delete products through site | Must have | Yes |
| Cart | Make purchase | [#29](https://github.com/mjjstockman/ecomm/issues/29) Add item to cart | Must have | Yes |
| | | [#30](https://github.com/mjjstockman/ecomm/issues/30) Change product quantity in cart | Should have | Yes |
| | | [#31](https://github.com/mjjstockman/ecomm/issues/31) Remove items from cart | Should have | Yes |
| | | [#32](https://github.com/mjjstockman/ecomm/issues/32) See order total | Must have | Yes |
| | | [#33](https://github.com/mjjstockman/ecomm/issues/33) Pay for goods | Must have | Yes |
| | | [#34](https://github.com/mjjstockman/ecomm/issues/34) Know if an order was successful | Must have | Yes |
| | | [#35](https://github.com/mjjstockman/ecomm/issues/35) Email order confirmation | Should have | Yes |
| Profile | Details | [#40](https://github.com/mjjstockman/ecomm/issues/40) Save profile details | Should have | Yes |
| | | [#41](https://github.com/mjjstockman/ecomm/issues/41) Edit profile details | Should have | Yes |
| | | [#42](https://github.com/mjjstockman/ecomm/issues/42) View order history | Should have | Yes |
| FAQ | | [#43](https://github.com/mjjstockman/ecomm/issues/43) Submit a question | Must have | Yes |
| | | [#44](https://github.com/mjjstockman/ecomm/issues/44) Submit an answer | Must have | Yes |
| | | [#46](https://github.com/mjjstockman/ecomm/issues/46) Email when question answered | Could have | Yes |
| Events | | [#45](https://github.com/mjjstockman/ecomm/issues/45) See previous events | Should have | Yes |
| Marketing | | [#36](https://github.com/mjjstockman/ecomm/issues/20) Add Facebook page | Must have | Yes |


[Back to top ⇧](#Get-Wurst)


## Wireframes


## Home Page: small
<img src="static/images/readme/wireframes/home-small-wireframe.png" alt="Black and white wireframe of home page on a small device">


## Home Page: large
<img src="static/images/readme/wireframes/home-large-wireframe.png" alt="Black and white wireframe of home page on a large device">


## Menu Page: small, site owner
When a site owner is logged in the menu page has additional "Edit" and "Delete" buttons for each product.
<img src="static/images/readme/wireframes/menu-small-owner-wireframe.png" alt="Black and white wireframe of menu page as site owner on a small device">


## Menu Page: large, site owner
<img src="static/images/readme/wireframes/menu-large-owner-wireframe.png" alt="Black and white wireframe of menu page as site owner on a small device">


## Menu Page: small, site user
<img src="static/images/readme/wireframes/menu-small-user-wireframe.png" alt="Black and white wireframe of menu page as site user on a small device">


## Menu Page: large, site user
<img src="static/images/readme/wireframes/menu-large-owner-wireframe.png" alt="Black and white wireframe of menu page as site user on a large device">


## FAQs Page: small, logged in
A logged in user can submit a question, an answer and like/remove their like of published answers.
Users are told if a question doesn't have a published answer.
<img src="static/images/readme/wireframes/faq-small-loggedin-wireframe.png" alt="Black and white wireframe of FAQ page as a logged in user on a small device">


## FAQs Page: large, anonymous user
Non-logged in users can view published questions and answers and see how many people have liked the answer.
<img src="static/images/readme/wireframes/faq-large-anonymous-wireframe.png" alt="Black and white wireframe of FAQ page as an anonymous user on a large device">


## Events Page: small
<img src="static/images/readme/wireframes/events-small-wireframe.png" alt="Black and white wireframe of events page on a small device">


## Events Page: large
<img src="static/images/readme/wireframes/events-large-wireframe.png" alt="Black and white wireframe of events page on a large device">


## Cart Page
<img src="static/images/readme/wireframes/cart-wireframe.png" alt="Black and white wireframe of home page">


## Profile Page: small
<img src="static/images/readme/wireframes/profile-small-wireframe.png" alt="Black and white wireframe of profile page on a small device">


## Profile Page: large
<img src="static/images/readme/wireframes/profile-large-wireframe.png" alt="Black and white wireframe of profile page on a large device">


*Images created and taken from [Balsamiq](https://balsamiq.com/wireframes)*


[Back to top ⇧](#Get-Wurst)


## Database Design
An ERD for the site can be found below. This was created using [Django-extensions](https://github.com/django-extensions/).
<img src="static/images/readme/general/erd.png" alt="Entity Relarionship Diagram">


## Typography


[Typespiration](https://typespiration.com/) was used to find complimenting [Google Font](https://fonts.google.com) pairings, with the following decided upon:


- Headings: Paytone One, with a fallback of sans-serif.
- Body: PT Sans, with a fallback of sans-serif.


[Back to top ⇧](#Get-Wurst)


## Colour Scheme

Once the hero image was chosen a shade of yellow from the cheese was used for the sites primary colour. A secondary, lighter colour was chosen for the secondary colour.  These were defined in the css as variables:

### General

![#EFC102](https://placehold.co/30/efc102/efc102) `Primary colour: #EFC102`

![F0E582](https://placehold.co/30/f0e582/f0e582) `Primary lighter colour: #F0E582`


### Buttons

The following colours were used as variables for primary buttons:

![#9DD9D2](https://placehold.co/30/9DD9D2/9DD9D2) `Primary colour: #9DD9D2`

![#71ABA5](https://placehold.co/30/71ABA5/71ABA5) `Primary dark colour: #71ABA5`

![#46807A](https://placehold.co/30/46807A/46807A) `Primary darker colour: #46807A`

![#1A5751](https://placehold.co/30/1A5751/1A5751) `Primary darkest colour: #1A5751`

The following colours were used as variables for the call to action buttons:

![#FFB8E4](https://placehold.co/30/FFB8E4/FFB8E4) `CTA primary colour: #FFB8E4`

![#CF8BB6](https://placehold.co/30/CF8BB6/CF8BB6) `CTA dark colour: #CF8BB6`

![#A1618A](https://placehold.co/30/A1618A/A1618A) `CTA darkest colour: #A1618A`

The following colours were used as variables for links:

![#25598E](https://placehold.co/30/25598E/25598E) `Primary colour: #25598E`

![#1D426D](https://placehold.co/30/1D426D/1D426D) `Hover colour: #1D426D`

![#153251](https://placehold.co/30/153251/153251) `Visited colour: #153251`


# Features


# General


## Navigation and Header


The navigation bar allows the user to easily select which area of the site they wish to view. It will be located at the top of the site, as this is common practice and is the area where most users eyes will be initially drawn. When a link is hovered over, it becomes highlighted to help the user confirm they are about to select the relevant link. The highlight remains once it is selected.

The 'hamburger' icon was used on large screens, where the navigation bar will collapse and be represented as three horizontal lines. When touched or clicked, this displays the navigation in a dropdown menu. This is done due to the limited real estate space on the screen, which makes the text hard to read at this size.

<img src="docs/readme/features/images/nav-anonymous.png" alt="Nav at mobile size showing the hamburger icon"> 

When a user is not logged in, the right side of the navigation includes "Sign Up" and "Login" links. A logged in user is shown a "My Profile" and "Logout" link and staff members have an additional "Product Management" dropdown link.

When the "FAQ's" link is hovered over, its non-abbreviated version, "Frequently Asked Questions," is displayed. This helps usability and can also help with translation systems and SEO.

A secondary navigation bar below has links to the product categories: bratwurst, Bratwurst, Chicken and Burgers. The search bar within this navigation can be used to search for words within a product's title, description and short description.


# Login

A user can login using their Google account or their Get Wurst username and password. The user can check the "Remember Me" checkbox if they want to be automatically logged in the next time they use the site. 


They can also click a link if they have forgotten their password.


# Signup

A user can sign up to the site by entering an email, username and password. Email and passwords fields need to be entered twice and are validated to make sure they match. Any invalid inputs are reploretd to the user.

<img src="docs/readme/features/images/sign-up.png" alt="Nav at mobile size showing the hamburger icon"> 

# Forgot password

A user can enter their email address to get an emailed link they can follow to reset their password.  The new password must be entered twice and they must match.


# Home Page

## Hero text
The hero text is in bold and the product categories are capitalised to draw attention and help explain straight away the sites purpose. A bright Call to Action button below the text aims to drive traffic to the menu, the first step in making a sale.

[Back to top ⇧](#Get-Wurst)
## Hero Image

An eye-catching image of a burger is placed to the right. This helps grab the user's attention and make them want to order food! The burger is used as this is a new addition to Get Wurst's menu.


[Back to top ⇧](#Get-Wurst)

## Our Story Information Box


A small section containing introductory information is placed below the hero image. This helps to quickly confirm to the user that they are on the correct site. It offers general information on the site's purpose, so they understand its goal.

[Back to top ⇧](#Get-Wurst)

# Menu

<img src="docs/readme/features/images/menu.png" alt="Nav at mobile size showing the hamburger icon"> 

The menu shows a brief general introduction to the products.

This is followed by information about the Bratwurst on sale. Each product has an image, a name, a short description, a link to its related category and a "See More Info" button. When the image is hovered, the name link is put in a hover state. Clicking the image, name or "See More Info" button takes the user to product information about that particular item.

This is followed with the same for Chicken and then Burgers.

If a site owner is logged in, each product has a delete and edit button.

[Back to top ⇧](#Get-Wurst)

# Product/delete
When a site owner is logged in and clicks the "DELETE" button a pop-up box asks if they are sure they want to delete the item. They can use a button to either delete the item or cancel.

[Back to top ⇧](#Get-Wurst)

# Product/edit
When a site owner is logged in and clicks the "EDIT" button a form is displayed with the product information pre-filled. They can then change any information that needs updating and click the "Update Product" button. There is also a button to cancel editing the information.

Django widgets have been used to set the height of the textarea inputs so they don't take up unnecessary real estate on the page. The image uses the CustomClearableFileInput widget to show the currently selected image.


[Back to top ⇧](#Get-Wurst)

## Product Detail
An image of the product is shown, as well as its name, long description, price and category link. The user can select their specified quantity by using their keyboard or the plus and minus icons either side of the input. They cannot enter an input of less than 1 or more than 9.

A primary button back to the menu and a CTA "Add to Cart" button are shown below the quantity input.

[Back to top ⇧](#Get-Wurst)

## FAQ's

<img src="docs/readme/features/images/faq.png" alt="Nav at mobile size showing the hamburger icon"> 

All visitors to the site can view published questions, answers and how many likes an answer has.

Anonymous users are informed that they need to login to submit questions and answers, or to like published answers.

A logged in user can submit a question and answer and like/unlike an answer. When submitting a question site users can check a checkbox if they wish to receive an email when their question has an approved answer. A question exactly the same as a published question cannot be submitted and the user is informed of this.

Questions or answers submitted by a site user has to be approved by a site owner before it is published. This is to make sure only suitable content is published and can be donw within the
Django admin. Questions and answers submitted by site owners are immediatly published.

Multiple answers can be published for each question. When more than one answer is published each answer except the last has a line underneath. The last answer has a heading letting users know they can submit another answer and a form to do so.

## Events

<img src="docs/readme/features/images/events.png" alt="Nav at mobile size showing the hamburger icon"> 

The events page has a short introductionary paragraph. A selection of events Get Wurst has catered for are shown with an image, a name and the date in Month / Year format. The image and name are links to the event. When the image is hovered the name link is displayed as hovered.

[Back to top ⇧](#Get-Wurst)

## Cart
If the current user does not have any items in their cart they are shown a message that their cart is empty and a CTA button back to the menu.

A user with items in their cart is shown an image of the item, its name and price. They can use a quantity input to adjust the quantity (no more than 9, no less than 1), or use a remove link to remove all chosen items from the cart. The cart total in shown and a primary button back to the menu and a CTA button to the checkout. The checkout button has the text "Secure Checkout" and an icon of a padlock to help build user confidence.

[Back to top ⇧](#Get-Wurst)

## Checkout
The checkout shows an order summary and a form to fill in payment details. The form will be pre-filled if the logged in user has previously chosen to have their information saved.

There is a primary button to adjust the cart and a CTA button to complete the order. The "Complete Order" button includes an icon of a padlock for reasons discussed previously.

When a site user is logged in they can choose to have their details saved by checking a checkbox.

Red warning text and an explanation icon informs the user how much they are about to be charged. 

[Django-phone-numberber-field library](https://pypi.org/project/django-phonenumber-field/) was used to validate the phone number.

The form can't be sent with invalid information and the user is informed where the error is.

[Back to top ⇧](#Get-Wurst)

## Checkout Success

<img src="docs/readme/features/images/order-confirmation.png" alt="Nav at mobile size showing the hamburger icon"> 

The checkout success page shows the user the email confirmation has been sent to their email.

A primary "Back to Home Page" button is displayed beneath.

[Back to top ⇧](#Get-Wurst)

## Footer

The footer at the bottom of the page includes a link to Get Wurst's Facebook business page and their Privacy Policy.

## Marketing

## Facebook page

The Facebook link in the footer goes to Get Wurst's Facebook page, as seen below:

<img src="docs/testing/images/us-36/facebook-top.png" alt="Get Wurst's Facebook page">

The hero image is of a burger as this is a new range Get Wurst has recently added so user attention was brought to this range.

Users can choose to sign up for a newletter so marketing information can be sent via
email. Emails can also be recieved when a users question within the FAQ has an approved answer.
This encourages the user to visit the site again and hopefully increase site usage.

The company is a Business to Customer business and the site was designed with this in mind. 
Details of products etc were described in language and using terms that a general customer
would undersatand and relate to. The detail and type of information offered would have been
different if the business sold to other businesses.

The brannding (colours used, style of the site etc) was kept consistant throughout the site.

[Back to top ⇧](#Get-Wurst)

## My Profile

Logged in users can view their profile. This shows their default information and any order history. Users can update their default information or click on a previous order number to see details of past orders.

## Order history detail

If a user clicks the order number link they are shown the details of that order.


# Features to Implement in the future

Add an Expand / Collapse All button to the accordion in the FAQ app.

Commit of attempt

https://github.com/mjjstockman/ecomm/commit/1cfbaedfa48c319734dae1732f133244bb2b0974

Issues:

The functionality was working as a toggle of the accordion open/closed state and "Expand all" / "Collapse all" button
text. However, if one accordion was open and the others closed, their state still toggled individually.

[Back to top ⇧](#Get-Wurst)


# Testing

Details on site testing can be found [here](TESTING.md).

[Back to top ⇧](#Get-Wurst)

# Bugs

## Bugs found throughout Development
Major bugs were added as GitHub Issues with a "bug" label.

These can be viewed in the following links:

[Google Signin](https://github.com/mjjstockman/ecomm/issues/47)

[Update/Remove links](https://github.com/mjjstockman/ecomm/issues/48)

[Database Issues](https://github.com/mjjstockman/ecomm/issues/49)

[Item quantity](https://github.com/mjjstockman/ecomm/issues/50)

[Order email confirmation not sent](https://github.com/mjjstockman/ecomm/issues/57)


NEW NEW NEW NEW NEW NEW!!!!!!!!!!!!!!!!!!!
Connecting to dB, 
followed error code trail.

uriUndefined img

so console.logged to double check for myself
```
console.log(process.env.MONGODB_URI);
```

log showed 'undefined'
checked .env was in root dir
checked no typos of MONGODB_URI when declared in .env and when called in index.js
checked had correctly required dotenv
checked other depencies
restarted server
cleared env variables cache

/ NEW NEW NEW NEW NEW NEW!!!!!!!!!!!!!!!!!!!



## Remaining Bugs

[Selenium](https://www.selenium.dev/) was used to automate Google Chrome web browser for testing
purposes (with Pytest). An issue arose setting up the Chromedriver within GitPod. Research found
that this is a fairly common issue and the best way forward would be to install and setup
VS Code locally. Due to time restrictions this was not done.

An example of the Selenium produced tests can be found below:

```
# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
class TestGetWurst():
    def setup_method(self, method):
        self.driver = webdriver.Chrome()
        self.vars = {}
    def teardown_method(self, method):
        self.driver.quit()
 
    def test_issue15Signupusingemailusernameandpassword(self):
        self.driver.get("https://ecomm-gw.herokuapp.com/")
        self.driver.set_window_size(1808, 1238)
        self.driver.find_element(By.LINK_TEXT, "Sign Up").click()
        self.driver.find_element(By.ID, "id_email").send_keys("testthis@gmail.com")
        self.driver.find_element(By.ID, "id_email2").send_keys("testthis@gmail.com")
        self.driver.find_element(By.ID, "id_username").send_keys("usersel")
        self.driver.find_element(By.ID, "id_password1").send_keys("crimshop32")
        self.driver.find_element(By.ID, "id_password2").send_keys("crimshop32")
        self.driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(7)").click()
```
A package [webdriver-manager](https://pypi.org/project/webdriver-manager/) was attempted to automatically select the correct webdriver. However this could not be made to work in time.

[Chromedriver error](https://github.com/mjjstockman/ecomm/issues/52)

[Back to top ⇧](#Get-Wurst)

# Still to do
+ Remove unused dependencies from requirements.txt
+ Check for unused CSS and JS

# Deployment

## Create an external database

Sign in or create an account with [ElephantSQL](https://www.elephantsql.com/).

If you don't have an ElephantSql account follow the below steps:

1.  On the [Home Page](https://www.elephantsql.com/) click "Get a managed database today"
2.  Select "Try now for FREE" within the TINY TURTLE database plan
3.  Select "Log in with GitHub", select your GitHub account and click "Authorize ElephantSQL"
4.  In the Create new team form add any name to your team, read and accept the Terms of Service and select Yes for GDP.
 Add your email address and click "Create team". This will crteate your ElephantSQL account.

You can now create the database for the project.

In the ElephantSql dashboard select the "+ Create New Instance" button

<img src="docs/deployment/elephantsql/create-instance.png" alt="ElephantSQL's create new instance button at top right of the page">

Give the instance a name (can be anything), make sure Tiny Turtle (Free) plan is sleceted and select "Select Region" button.

If you reciece a message stating "Error: No cluster available in your-chosen-data-center yet", choose a different region.

<img src="docs/deployment/elephantsql/select-plan.png" alt="ElephantSQL's name and plan selection">

Choose a Data center closest to you and select the "Review" button.

Back in the ElephantSQL dashboard click the databse name you just created. Copy the URL.


## Create an app on Heroku

Sign in or create an account with [Heroku](https://www.heroku.com/)

In the Heroku dashboard use the New tab to create a new app.

Name the app and choose a region.

In the Settings tab select "Reveal Congig Vars".

Add DATABASE_URL with the value of the database URL copied from ElephantSQL. This should not include
qutoation marks.

Enter the following command in to your terminal to install dj_database and psycopg2. These are needed to connect to the database.

```pip3 install dj_database_url==0.5.0 psycopg2```

Followed by ```pip freeze > requirements.txt``` to update requirements.txt.

Add ``` import dj_database_url``` below import os in settings.py

In the DATABASES section of the settings comment out the initial settings and place the following underneath:

```
DATABASES = {
     'default': dj_database_url.parse('your-database-url-here')
 }
```

Migrate the models to the database using
```
 python3 manage.py migrate
```

Create a superuser and supply a username and password:
```
 python3 manage.py migrate
```

Within the Django admin confirm the email address

Change the DATABSE settings to the following:

```
if 'DATABASE_URL' in os.environ:
    DATABASES = {
        'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
    }
else:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
        }
    }
```

Install [Gunicorn](https://gunicorn.org/) webserver:

```
pip3 install gunicorn
```

Create a file named Procfile in the root of the project and add:
```
web: gunicorn ecommerce.wsgi:application
```

Add the required dependencies to requirements.tc with:
```
pip3 feeze > requirements
```

Add the following to settings:
```
ALLOWED_HOSTS = ["ecomm-gw.herokuapp.com", "localhost"]
```

Add changes, commit and push to GitHub and Heroku
```
git add . 
git commit -m "Deployment"
git push
git push heroku main
```

If you wish you can set up automatic deploys to Heroku when the project it pushed to GitHub.


## Set up hosting of static and media files with AWS

1.  Sign in or create an account with [Amazon Web Server](https://aws.amazon.com/)

2.  Navigate to the AWS Console home

3.  Search for "s3" in the search bar

4.  Click on "Create bucket"

5.  In the Create bucket page add the following information:

- A name for the bucket. It is recomeneded to use the same name you gave your Heroku app.

- A region closest to you.

- Select ACLs enabled

- Uncheck the "Block all public access" checkbox

- Check the box beside "I acknowledge that the current settings might result in this bucket and the objects within becoming public."

Scroll to the bottom of the page and select "Create bucket"

6.  Click on the new bucket you just created.

7.  In the "Properties" tab scroll to the bottom of the page and in Static website hosting
click "Edit".

8.  Select "Enable" and paste the following in the the "Redirection rules – optional" at
the bottom of the page:

```
[
    {
        "AllowedHeaders": [
            "Authorization"
    ],
    "AllowedMethods": [
        "GET"
    ],
    "AllowedOrigins": [
        "*"
    ],
        "ExposeHeaders": []
    }
]
```

9.  In the "Permissions" tab click on the "Edit" button underneath Bucket policy

10.  Copy the "Bucket ARN" and click on "Policy generator"

11.  On the next page:

- Select "S3 Bucket Policy"

- Add * (an asterik) as the "Principal" value

- Select "GetObject" in the "Actions" dropdown

- Paste the "Bucket ARN" (from step 10 above) as the Amazon Resource Name (ARN)

- Click "Add Statement" then "Generate Policy"

- Copy the policy shown in the pop-up box

12.  Back in the AWS "Edit bucket policy" paste the policy just copied.

13.  At the end of the resource key but before the closing quotation mark add: 
```
/*
```

and click "Save"

14. On the next page click "Edit" in the "Access control list (ACL)" section.

- Enable "List" for "Everyone (public access)"

- Accept the warning

# Back in AWS services menu

1. Select "IAM" from the AWS menu and then "User groups" from the menu on the left 
hand side.

2.  Click the "Create group" button

3.  Give the group a name and click "Next step", then on the next page "Next step" agin.

4.  Click the "Create group" button

5.  Select "Polices" from the menu, then "Create policy" button.

6.  In the JSON tab select "Import managed policy" link

7.  Add "s3" into the search bar, select "AmazonS3FullAccess" and click "Import"

8.  Paste in the Bucket ARN and the Bucket ARN followed by /* as the Resource values

9.  Click "Review policy" and add a name and description and click "Create policy"

10.  Select "Groups" from the menu and select the group you made in Step 3.

11.  Click "Attach policy", search and select the policy just created.

12.  Click "Attach policy"

# Add a user to the group

1.  Select "Users" in the menu, then click "Add user"

2.  Add a user name and check the "Programatic access" checkbox for Access type

3.  Select "Next: Permissions"

4.  On the following page check the name of your added user group

5.  Click through the next pages until you can click the "Create user" button

6.  Donload the .csv file 


# Connect Django

1. Install boto3 and django-storages:

```
pip3 install boto3
pip3 install django-storages
```

2.  Add above to requirements.tct:
```
pip3 freeze > requirenets.txt
```

3.  Add "storages", to INSTALLED_APPS in seetings.py

4.  Paste the following in settings.py:
```
if 'USE_AWS' in os.environ:
    # Cache control
    AWS_S3_OBJECT_PARAMETERS = {
        'Expires': 'Thu, 31 Dec 2099 20:00:00 GMT',
        'CacheControl': 'max-age=94608000',
    }
    # Bucket Config
    AWS_STORAGE_BUCKET_NAME = os.getenv('AWS_STORAGE_BUCKET_NAME')
    AWS_S3_REGION_NAME = 'eu-west-2'
    AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
    AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
```

5.  Paste the following in settings.py:
```
    # Static and media files
    STATICFILES_STORAGE = 'custom_storages.StaticStorage'
    STATICFILES_LOCATION = 'static'
    DEFAULT_FILE_STORAGE = 'custom_storages.MediaStorage'
    MEDIAFILES_LOCATION = 'media'
    # Override static and media URLs in production
    STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{STATICFILES_LOCATION}/'
    MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{MEDIAFILES_LOCATION}/'
```

# Back in Heroku

1.  Select "Reveal Config Vars" in the "Settings" tab

2.  Add the variables "AWS_ACCESS_KEY_ID" and "AWS_SECRET_ACCESS_KEY" with the 
values from the credentails.csv file from Step 6 in Add a user to the group above

3.  Add an additioanl "USE_AWS" variable with the key of "True"

# In the root directory of the project

1.  Create a file named "custom_storages.py"

2.  Paste in the following:
```
from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage
class StaticStorage(S3Boto3Storage):
    location = settings.STATICFILES_LOCATION
class MediaStorage(S3Boto3Storage):
    location = settings.MEDIAFILES_LOCATION
```

3.  Add and commit then push the project to GitHub. If you haven't set up automatic deployment
to Heroku, also deploy to Heroku.

 # In AWS

 1.  Add a folder named "media" in the S3 bucket page

 2.  Click "Upload" in the media folder

 3.  Select the images used on the site and click "Next"

 4.  Select "Grant public read access to this object(s)" under Manage public permissions,
 click "Next" then "Next" again

 5.   Click "Upload"

# Stripe

1.  Sign in or create an account with [Stripe](https://stripe.com/gb)

2.  Click "Developers" from the menu on the left hand side and then "API keys"

3.  Copy the "Publishable key" and "Secret key"

4.  Add these to Heroku Config Vars as STRIPE_PUBLIC_KEY and STRIPE_SECRET_KEY respectivaely.

5.  Click "Webhooks" from the Developers tab and then "+ Add endpoint"

6.  Enter the following as the "Endpoint URL":
```
https://ecomm-gw.herokuapp.com/checkout/wh/
```

7.  Select "Recieve all events" and then "Add endpoint"

8.  Copy the "Signing secret"

9.  Add the "Signing secret" to Heroku Config Vars as STRIPE_WH_SECRET


## How to Fork the Repository

Log into [GitHub](https://github.com/login) or [create an account](https://github.com/join).

Select the [GitHub Repository](https://github.com/mjjstockman/ecomm).

Click "Fork" at the top right of the page.

The repository will be copied into your GitHub account.

[Back to top ⇧](#Get-Wurst)

- - - 

## How to create a Clone using SSH

Log into [GitHub](https://github.com/login) or [create an account](https://github.com/join).

Select the [GitHub Repository](https://github.com/mjjstockman/ecomm).

Click on the Code button.

Copy the provided SSH link.

Open Terminal.

Navigate into the directory you want to clone the repositroy to.

Type git clone and paste the copied URL.

```
$ git clone https://github.com/mjjstockman/ecomm
```

Press **Enter**.

[Back to top ⇧](#Get-Wurst)

# Google Authentification

In order to allow users to register and login using Google.
See [here](https://www.section.io/engineering-education/django-google-oauth/) for detailed instructions.


# Credits

Many thanks to the following which were used throughout the creation of this site:

- [w3c Markup Validator](https://validator.w3.org)
- [Am I Responsive?](http://ami.responsivedesign.is)
- [Balsamiq](https://balsamiq.com/)
- [Coolors](https://coolors.co/)
- [Design Course tutorial](https://www.youtube.com/watch?v=z9H7p1_iI14)
- [Favicon.io](https://favicon.io)
- [Font Awesome](https://fontawesome.com)
- [Free Formatter](https://www.freeformatter.com/)
- [Google Fonts](https://fonts.google.com)
- [Git](https://git-scm.com)
- [GitHub](https://github.com)
- [Pexels](https://www.pexels.com)
- [Responsinator](http://www.responsinator.com)
- [Super Cool Design](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text)
- [Typespiration](https://typespiration.com)
- [xml-sitemaps.com](www.xml-sitemaps.com)
## Acknowledgements

- Many thanks to my mentor for guidance.
- Thank you to the Code Institute Slack community for their advice.
- A wonderful [README.md](https://github.com/rebeccatraceyt/KryanLive) by [Rebecca Tracey-Timoney](https://github.com/rebeccatraceyt) was used for inspiration and guidance.

[Back to top ⇧](#Get-Wurst)

### Tutorials and inspiration

* The project walkthrough Butique Ado from Code Institute 


[Back to top ⇧](#Get-Wurst)

## Images
The logo was created by [Alex Mench](https://twitter.com/Alex_Mench) who kindly gave permission for its use.

All other images were taken from [Unsplash](https://unsplash.com/).

Images were resized and comnverted to webp files using:

https://www.simpleimageresizer.com/
https://tinypng.com/


[Back to top ⇧](#Get-Wurst)


### Lighthouse

- Initial Lighthouse reports can be seen below

[lighthouse report]((static/images/readme/lighthouse/first/lighthouse report viewer.dpf))

[lighthouse](static/images/readme/lighthouse/first/overall.png)

[lighthouse](static/images/readme/lighthouse/first/accessibility.png)

[lighthouse](static/images/readme/lighthouse/first/best-practices.png)

[lighthouse](static/images/readme/lighthouse/first/performance.png)

The following article helped to improve elimination of render blocking resources:
https://blog.logrocket.com/9-tricks-eliminate-render-blocking-resources/


Main render-blocking resources are Stripe (with 447,926 bytes and 78% being unused) and Bootstrap (with 194,696 and 87 % being unused).
It was decided not to purge these of unused CSS incase the project needs expanding on or revision at a future date.

Correct ratio of logo
[Lighthouse](static/images/readme/lighthouse/first/logo-ratio.png)
(static/images/readme/lighthouse/first/logo-ratio.png)


[Lighthouse](static/images/readme/lighthouse/first/pwa.png)

[Lighthouse](static/images/readme/lighthouse/first/seo.png)


## What did
Gave logo explicit width and height.


## Project Bugs and Solutions:

### menu/add/
[Template does not exist](static/images/readme/bugs/menu-add-ws.png)

Saw space between exception value, checked code

```
class CustomClearableFileInput(ClearableFileInput):
    clear_checkbox_label = _("Remove")
    initial_text = _("Current Image")
    input_text = _("")
    template_name = "products/custom_widget_templates/\
                     custom_clearable_file_input.html"
```

Incorrect line break.

How solved:
https://stackoverflow.com/questions/10660435/how-do-i-split-the-definition-of-a-long-string-over-multiple-lines

```
template_name = "products/custom_widget_templates/" \
                    "custom_clearable_file_input.html"
```


### Wet menu template
(static/images/readme/bugs/faq-label-error.png)
COMMIT 501

Wet menu/all template

```
<h2>Bratwursts</h2>
    <div class="row">
        <div class="col-12">
            <div class="row">
                {% for product in products %}
                {% if product.category|slugify == 'bratwurst' %}
                    <div class="col-md-6 col-lg-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="image-container">
                                    <!-- ADD ARIA LABEL -->
                                    <a href="{% url 'product_detail' product.id %}">
                                        <img class="card-img-top card-img" src="{{ product.image.url }}"
                                            alt="{{ product.name }}" class="h-50">
                                    </a>
                                </div>
                                <div>
                                    <h1 class="card-title">{{ product.name }}</h1>
                                    </a>
                                    <p class="card-text">{{ product.short_description }}</p>
                                </div>
                                <div class="d-grid mb-2">
                                    <a href="{% url 'products' %}?category={{ product.category }}"
                                        class="card-subtitle mb-2 text-muted text-decoration-none">
                                        {{ product.category }}
                                    </a>
                                    <a href="{% url 'product_detail' product.id %}" class="card-link btn btn-cta"
                                        role="button">
                                        See More Info
                                    </a>
                                    <!-- Button trigger modal -->
                                    {% if request.user.is_superuser %}
                                    <div class="card-body border-top border-1 border-dark">
                                        <div class="d-grid gap-2 mb-2">
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#deleteProductModal">
                                                DELETE
                                            </button>
                                            <a class="btn btn-secondary" href="{% url 'edit_product' product.id %}">
                                                Edit
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Modal -->
                                    <div class="modal fade" id="deleteProductModal" tabindex="-1"
                                        aria-labelledby="deleteProductModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="deleteProductModalLabel">Modal title
                                                    </h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    Are you sure you want to delete {{ product.name }}?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Cancel</button>
                                                    <a class="btn btn-danger"
                                                        href="{% url 'delete_product' product.id %}">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <!-- closes modal -->
                                    {% endif %} <!-- close superuser-->
                                </div>
                            </div>
                        </div>
                    </div>
                {% endif %}
                {% empty %}
                <h2>NO PRODUCTS YET</h2>
                {% endfor %}
             </div>  <!-- closes row -->
             <h2>Currywurst</h2>
             <div class="row">
                 {% for product in products %}
                 {% if product.category|slugify == 'currywurst' %}
                 
                 <div class="col-md-6 col-lg-4 mb-3">
                     <div class="card">
```

Used partial template to DRY

'''
class QuestionForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(QuestionForm, self).__init__(*args, **kwargs)

        self.fields['body'].label = "Question"

### Cat-nav links
[Attribute error](static/images/readme/bugs/list-no-filter.png)

Saw refering to a list var

```
def all(request):
    products = get_list_or_404(Product)
    cart = request.session.get("cart", {})
    query = None
    categories = None
```

Products var is a list.  Change back to Product.objects.all

def all(request):
    products = Product.objects.all()
    cart = request.session.get("cart", {})
    query = None
    categories = None


### FAQ form labels
[Incorrect form label](static/images/readme/bugs/faq-label-error.png)

Django field labels not working once added css

```
class QuestionForm(forms.ModelForm):
    email_on_answer = forms.CharField(widget=forms.CheckboxInput(attrs={"class": "rounded-0"}))
    body = forms.CharField(widget=forms.TextInput(attrs={"class": "rounded-0"}))
    class Meta:
        model = Question
        fields = ['body', 'email_on_answer']
        labels = {
            'body': 'Question',
        }
```

Add as below instead....

'''
class QuestionForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(QuestionForm, self).__init__(*args, **kwargs)

        self.fields['body'].label = "Question"
'''




