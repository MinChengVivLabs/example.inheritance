<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Example Capsule -- example.inheritance</h1>
</p>

**Purpose**

The purpose of this example is to demonstrate how and when to use `role-of` or `extends` in Bixby

**Summary**
  - Assume TypeBase is the base concept, and TypeChild is the `role-of` or `extends` concept. 
  - `role-of` only:
    - TypeBase can be feed into action requires TypeChild
    - NO new property in TypeChild
  - `extends` only:
    - TypeChild can be feed into action requires TypeBase
    - Allow new property in TypeChild
  - `role-of` and `extends` together:
    - TypeBase can be feed into action requires TypeChild
    - TypeChild can be feed into action requires TypeBase
    - NO new property in TypeChild
  - This capsule use **StructGoPlayer** as TypeBase and **StructGoPlayerBlack**, **StructGoPlayerWhite**, and **StructGoObserver** as TypeChild concept.

**Notes**
  - There is an error in training to reflect a bug in current version. 
    - It should be gone in the next version IDE.
  - Check https://bixbydevelopers.zendesk.com/knowledge/articles/360021900934 for details. 

**Resources**

Bixby Developer Resources:
  - Bixby Developer Center: https://bixbydevelopers.com/
  - Bixby Developer Support Help Center: https://support.bixbydevelopers.com/hc/en-us
  - You may find the  FAQ section useful as it contains articles that provide insight into common pitfalls first-time developers may encounter.

**Need Help?**
  - If you are stuck or need assistance, feel free to reach out to us. We are here to help you with any questions or point you to the right areas of the Bixby Developer Center or the Bixby Help Center. You can reach us by sending your questions via email to support@bixbydevelopers.com.
