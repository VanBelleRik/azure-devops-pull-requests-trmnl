# Azure DevOps Pull Requests Plugin

This plugin requires some information from your Azure DevOps account in order to connect and fetch pull requests.  
Follow the steps below to find each field.

---

## 🔑 Access Token
You need a **Personal Access Token (PAT)** from Azure DevOps.

1. Go to [Azure DevOps](https://dev.azure.com/).
2. Click on your profile picture (top right) → **Personal Access Tokens**.
3. Click **New Token**.
4. Give it a **Name**, select an **Organization**, and choose an **Expiration**.
5. Under **Scopes**, select:
   - `Code (Read)` → minimum required to read Pull Requests.
6. Click **Create** and copy the token.
7. Paste this token into the **Access Token** field.

⚠️ Keep your token safe! Do not share it publicly.

---

## 🏢 Organization
This is the **name of your Azure DevOps organization**.

1. Log in to [Azure DevOps](https://dev.azure.com/).
2. Your organization name is in the URL:
   1. Example: `https://dev.azure.com/${ORGANIZATION_NAME}/`

Paste this into the **Organization** field.

---

## 📂 Project
This is the **name of your Azure DevOps project**.

1. After selecting your organization, you’ll see a list of projects.
2. Choose the project you want to connect with.
3. The name shown is what you enter into the **Project** field.  

---

## 🔄 Pull Request Status
This controls which pull requests to show:
- `All` → Show all PRs  
- `Active` → Only open/active PRs  
- `Completed` → Only merged/closed PRs  

Select the option that matches your use case.

---

## ℹ️ Notes
- You only need **read access** to pull requests.  
- Tokens can expire — if things stop working, generate a new one.  
- Never commit your access token into code repositories.  