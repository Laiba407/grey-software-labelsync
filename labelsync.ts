import { labelsync, repo } from "label-sync";

/* Repository */
import { prisma } from "./repos/prisma";
import { github } from "./repos/github";

/* Config */
labelsync({
  repos: {
    /* Check presets in the repos folder. */
    // prisma,
    "toonin": github,
    "org": github,
    "material-math": github,
    "grey.software": github,
    "futurist.network": github,
    "sponsorware": github,
    "twitter-focus": github,
    "linkedin-focus": github,
    /* Personalized repositories */
    /* Personalized repositories */
  },
});
