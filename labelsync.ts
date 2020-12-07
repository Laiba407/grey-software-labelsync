import { labelsync, repo } from "label-sync";

/* Repository */
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
    "hackathon-2020-codeforpak-civictech": github
    /* Personalized repositories */
    /* Personalized repositories */
  },
});
