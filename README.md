# secure-ci-cd-demo
# Secure CI/CD Demo – DevSecOps Pipeline (TD4)

## Project Overview

This project demonstrates the integration of security controls into a Continuous Integration / Continuous Deployment (CI/CD) pipeline using a simple Node.js web application. The objective is to illustrate how DevSecOps practices enable early detection and remediation of vulnerabilities by embedding automated security checks throughout the software development lifecycle.

The pipeline integrates Static Application Security Testing (SAST), Software Composition Analysis (SCA), and Dynamic Application Security Testing (DAST) tools using GitHub Actions. These tools help ensure that vulnerabilities are detected early and addressed before deployment.

## Technologies Used

The following technologies were used in this project:

- Node.js (Express)
- GitHub Actions
- Semgrep (SAST)
- OWASP Dependency Check (SCA)
- OWASP ZAP (DAST)

These tools represent complementary security controls applied at different stages of the CI/CD pipeline.

## DevSecOps Pipeline Architecture

The security pipeline follows a shift-left security approach where controls are applied early and continuously throughout the development lifecycle. The logical order of integration is:

Threat Modeling → SAST → SCA → Build → DAST

This ordering ensures risks are identified during design, coding, dependency integration, and runtime testing phases.

## Security Controls Implemented

Three automated security controls were integrated into the pipeline.

Semgrep was used as a Static Application Security Testing (SAST) tool to analyze source code and detect insecure coding patterns during early development stages. This allows vulnerabilities such as injection risks and unsafe input handling to be identified before deployment.

OWASP Dependency Check was used as a Software Composition Analysis (SCA) tool to detect known vulnerabilities in third-party libraries included in the project. Since modern applications depend heavily on external packages, early detection of vulnerable dependencies improves overall application security.

OWASP ZAP was integrated as a Dynamic Application Security Testing (DAST) tool to simulate runtime attacks against the application environment. This helps identify externally visible weaknesses such as exposed endpoints, missing headers, or configuration issues.

Together, these tools demonstrate how security validation can be embedded throughout the CI/CD lifecycle.

## Example Vulnerability Identified

During static code analysis, a potential SQL injection vulnerability was identified in the application. The issue occurred because user-controlled input was directly concatenated into a SQL query string:

const sql = "SELECT * FROM users WHERE id = " + userId;

This approach allows attackers to manipulate database queries by injecting malicious input through request parameters. Such vulnerabilities may lead to unauthorized data access, modification, or deletion.

## Security Fix Applied

The vulnerability was corrected by validating user input and replacing unsafe string concatenation with a parameterized query placeholder:

if (!/^\d+$/.test(userId)) {
    return res.status(400).send("Invalid user id");
}

const sql = "SELECT * FROM users WHERE id = ?";

Input validation ensures that only numeric identifiers are accepted, while parameterized queries prevent attackers from modifying SQL query structure. This significantly reduces injection risk and improves application security.

## GitHub Actions Workflows

The repository includes three automated security workflows configured using GitHub Actions:

- Semgrep Scan (SAST)
- Dependency Check Scan (SCA)
- OWASP ZAP Scan (DAST)

These workflows execute automatically when code is updated, ensuring continuous security validation across multiple stages of the pipeline.

## Evidence Included

Execution evidence provided in this project includes:

- Semgrep scan results from GitHub Actions
- Dependency Check scan results from GitHub Actions
- OWASP ZAP scan results from GitHub Actions
- Example vulnerability detection and remediation in source code

These screenshots demonstrate the successful implementation of automated security controls within the CI/CD workflow.

## Learning Outcomes

This project demonstrates the practical integration of security testing into a CI/CD pipeline using DevSecOps principles. It highlights how automated tools can detect vulnerabilities early, reduce remediation effort, and improve software quality. It also illustrates how combining SAST, SCA, and DAST tools provides layered protection across different stages of the development lifecycle.