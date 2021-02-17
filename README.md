# Fair-Exchange-Protocol
Demonstrating Consent in Online Collection of Private Data

Privacy in online collection of personal data is currently a much debated topic considering, amongst other reasons, the incidents with well known digital organisations, such as social networks and, in Europe, the recent EU/GDPR regulation. Among other required practices, explicit and simply worded consent from individuals must be obtained before collecting and using personal information. Further, individuals must also be given detailed information about what, how and what for data is collected. Consent is typically obtained at the collection point and, at a single point in time (ignoring updates), associated with Privacy Policies or End-User Agreements. At any moment, both the user and the organization should be able to produce evidence of this consent. This proof should not be disputable which leads us to strong cryptographic properties.

The problem we discuss is how to robustly demonstrate such consent was given. We adapt fair-exchange protocols to this particular problem and, upon an exchange of personal data, we are able to produce a cryptographic receipt of acceptance that any party can use to prove consent and elicit non-repudiation. We discuss two broad strategies: a pure peerto-peer scheme and the use of a Trusted Third Party.

The protocol has been developed using the Crypto library in Node framework. 
