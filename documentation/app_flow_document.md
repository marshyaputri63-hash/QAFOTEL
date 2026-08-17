# Qafotel Company Profile App Flow Document

## Onboarding and Sign-In/Sign-Up
A new visitor finds the Qafotel website when they enter the domain in their browser or follow a link from marketing materials. This landing page welcomes them without any barriers or authentication steps. They can freely browse the public site sections such as About, Rooms, Gallery, Café, and Contact. There is no sign-up or account creation for regular visitors. For staff who need to update content, there is a simple admin interface located at the `/admin` path. When a staff member navigates to `/admin`, they see a login form asking for a secret passphrase. This passphrase is provided via an environment variable on deployment and is the only credential needed. After entering the correct secret, the staff member gains access to the CMS dashboard. They can sign out at any time by clicking a log out button in the admin header. If the secret is forgotten, the deployer must update the environment variable and redeploy the site; there is no automated password recovery in this version.

## Main Dashboard or Home Page
Once a visitor lands on the homepage, they see a full-screen hero section with a botanical image placeholder and the hotel name in the chunky rounded “Qafotel” font style. Below the hero, an introductory paragraph describes the hotel’s unique blend of luxury rooms and Jardin Coffee. The global header at the top displays the Qafotel logo on the left and a horizontal navigation bar with links for Home, About, Rooms, Gallery, Café, and Contact. This header stays fixed as the user scrolls. At the bottom of each page, a footer shows the hotel’s email and phone number alongside a copyright notice in the cream font color.

## Detailed Feature Flows and Page Transitions
When a user clicks the About link in the header, the About Us page loads with a brand story section that uses the defined primary and secondary colors. The user reads the hotel’s mission and sees a placeholder image gallery embedded in the content. Clicking Rooms in the navigation triggers a transition to the Rooms page. On that page, two room cards appear side by side on desktop or stacked on mobile. Each card shows the room type name, a placeholder image, size, occupancy, a list of amenities, a brief description, and nightly pricing. Users can scroll through the page to see both Standard Room and Deluxe Room details. The user then clicks Gallery to view a responsive grid of placeholder images that expand into a lightbox overlay when selected. From the lightbox, they can navigate between images or close it to return to the gallery grid. Selecting Café in the header brings up the Jardin Coffee page. This page displays three categories: Drinks, Pastries, and Workspace. Under each category, a list of menu items shows placeholder names, descriptions, and prices. A staff member later updates these items via the CMS. Finally, clicking Contact takes the user to a page that lists the hotel email address and phone number in large text and includes a simple contact form that opens the visitor’s email client if clicked.

In the staff journey within the admin interface, after signing in at `/admin`, the user lands on the CMS dashboard. The dashboard includes links to manage Rooms, Café Menu, Gallery, and Static Text. When the staff member clicks Rooms, they see a table of existing room types with edit and delete controls. They can add a new room type by filling out a form for name, size, occupancy, amenities, description, price, and uploading placeholder images. Saving updates refreshes the public Rooms page. Clicking Café Menu in the sidebar shows a similar table and form interface for Drinks, Pastries, and Workspace categories. The staff member can add or remove items and reorder them, and changes reflect on the public Café page. The Gallery section allows the user to upload images with captions, and the Static Text area lets them edit the About Us text or contact info. After making edits, staff can sign out to return to the public site.

## Settings and Account Management
There are no general user settings since public visitors do not have accounts. For admin users, the only credential is the environment-based secret. Admins do not manage personal profiles or notification preferences within this interface. They configure site content only. If billing or subscription features were added in the future, they would appear under a separate settings module in this same admin interface. After finishing content updates, the admin clicks the log out button in the header to end the session and return to the login screen.

## Error States and Alternate Paths
If a public visitor navigates to an undefined route, they see a friendly 404 page that includes the header and footer and a message directing them to the homepage. The page offers a link back to Home. If the network connection drops while loading any public page, a fallback message appears stating that the user is offline and prompting them to check their connection. In the admin interface, entering the wrong secret on the login form displays an error banner telling the user that the passphrase is incorrect. They may retry as many times as needed. If a staff member tries to submit an incomplete form when adding or editing content, the form displays inline validation messages highlighting required fields. When the database is unreachable, both public and admin pages show a generic “Service Unavailable” message until the connection is restored.

## Conclusion and Overall App Journey
From a visitor’s first moment on the landing page to exploring the hotel’s story, browsing room options, viewing the gallery, and checking out the Jardin Coffee menu, the site offers a smooth, visually consistent journey. Returning visitors easily navigate via the fixed header, and staff maintain fresh content through a lightweight admin interface protected by a secret passphrase. Typical end goals include reading about Qafotel, choosing a room type to plan a stay, and discovering the café offerings, all finished with a quick glance at contact details. The site remains fast and responsive, with clear paths for public browsing and content management.

ASCII Flowchart

```
+---------------+      +--------------+      +----------+
| Landing Page  |----->| Navigation   |----->| About Us |
+---------------+      +--------------+      +----------+
       |                     |                      |
       v                     v                      v
  +-----------+         +--------+            +-----------+
  | Rooms     |<------->| Gallery|<---------->|  Café     |
  +-----------+         +--------+            +-----------+
       |                                          |
       v                                          v
  +-------------+                           +------------+
  | Contact     |                           | /admin     |
  +-------------+                           +------+-----+
                                                     |
                                                     v
                                            +------------------+
                                            | Admin Dashboard  |
                                            +---+---+---+------+ 
                                                v   v   v     
                                                 Rooms,Café, etc.
```