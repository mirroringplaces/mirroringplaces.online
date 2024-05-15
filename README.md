# Hugo project for mirroringplaces.online

This is the website code for [mirroringplaces.online](https://mirroringplaces.online/), including all the content.

## Running the site locally

### Step 1: Installing Hugo

Refer to: https://gohugo.io/installation/ (installation instructions)

We are using the **extended version** of Hugo which is capable of compiling SASS.

Hugo can change in future versions. As of writing this, we are using version 0.124.

### Step 2: Run hugo

You need to clone this repository to a location on your computer.
After this, you can run `hugo server`.

```console
# The below command is adjusted with the path to where you have cloned this repository.
cd /path/to/repository

# Running this command makes the website available on http://localhost:1313
hugo server
```

## Deployment

Deployment happens automatically when changes are merged to the `main` branch.
