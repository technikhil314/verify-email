const dnsPromises = require("dns").promises;
const validator = require("email-validator");
const fetch = require("isomorphic-fetch");
const allPublicDomains = require("../../constants/publicDomains");

export default async function handler(req, res) {
  const { email } = req.query;
  if (!validator.validate(email)) {
    return res.status(400).json({
      error: true,
      message: "not valid email id.",
    });
  }
  const [, domain] = email.split("@");
  const domainHasValidMxRecords = hasValidMxRecords(domain);
  if (!domainHasValidMxRecords) {
    return res.status(400).json({
      error: true,
      message: "domain has no mx records.",
    });
  }
  const domainIsDisposableProvider = await isDisposableProvider(domain);
  if (domainIsDisposableProvider) {
    return res.status(200).json({
      disposable: true,
      public: false,
      private: false,
    });
  }
  if (isPublicDomain(domain)) {
    return res.status(200).json({
      disposable: false,
      public: true,
      private: false,
    });
  } else {
    return res.status(200).json({
      disposable: false,
      public: false,
      private: true,
    });
  }
}

async function hasValidMxRecords(domain) {
  try {
    const mxRecords = await dnsPromises.resolveMx(domain);
    if (mxRecords.length > 0) {
      if (mxRecords.every((x) => !x.exchange && !x.priority)) {
        return false;
      }
      return true;
    }
    return false;
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function isDisposableProvider(domain) {
  try {
    const response = await fetch(
      `https://open.kickbox.com/v1/disposable/${domain}`
    );
    const json = await response.json();
    return json.disposable;
  } catch (e) {
    console.error(e);
    return true;
  }
}

function isPublicDomain(domain) {
  if (allPublicDomains.includes(domain)) {
    return true;
  }
  return false;
}
