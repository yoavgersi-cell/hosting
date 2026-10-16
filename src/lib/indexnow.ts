// IndexNow key for www.thetopwebhosting.com. Not a secret in the credential
// sense - the protocol requires it to be publicly served at /<key>.txt so
// engines can verify we own the host; it only authorizes submitting THIS
// host's URLs. Rotate by minting a new hex string, updating here, and
// renaming the public key file to match.
export const INDEXNOW_KEY = "0457090a507942532490eddc476bc8b1ad56cf867438b527985faa8e77bbb70b";
export const INDEXNOW_HOST = "www.thetopwebhosting.com";
