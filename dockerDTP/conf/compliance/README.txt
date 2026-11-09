Let's assume you would like to define a custom compliance named "ACME-Policy" which is used by the ACME company.
This compliance will contain several compliance categories named for example, "ACME Security" and "ACME Performance".
Each compliance categories contains a set of Parasoft Coding Standards rules.
You can track overall rule adherence and rule adherence by category in DTP's widgets and reports.  

Goals:
- Define a custom compliance
- Enable the custom compliance for widgets and reports in DTP.

1. Defining a custom compliance

i) Copy example DTP\conf\examples\compliance\ACME-Policy.xml to DTP\conf\compliance folder.
ii) Rename ACME-Policy.xml.  The file name will serve as the unique identifier for your compliance definition.
NOTE: If you wish to override one of the default compliance types (found in the conf/compliance/builtin directory) match the file name to the one you want to override. 

2. Editing a compliance definition XML:
<Compliance name="ACME Company Coding Standards Policy">
This is the name of your custom compliance that will be shown in the UI.

<ComplianceCategory groupId="SECURITY" name="ACME Security">
Compliance categories require a "groupId" to serve as an identifier and a human readable "name", which is displayed in the UI.

<RulePattern pattern="SECURITY-.*"/>
Use the RulePattern elements to specify which groups of rules you want to include in each ComplianceCategory.

2. Restart Parasoft DTP Server.

3. After DTP has restarted, your custom compliance will be available in the compliance widget's configuration under the label "Compliance".

Recap:
1. File name is the unique id for your custom compliance.
2. If your custom compliance has the same file name as a built in compliance, your custom compliance will override the built in one.
3. Your custom compliance be configured with compliance categories, which are made up of rule patterns, to suit your organization's needs.