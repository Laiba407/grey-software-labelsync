import { repo, label } from "label-sync";

/**
 * Default collection of label in a Github repository.
 */
export const github = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [
    label({
      name: "Domain: Config",
      color: "#b56edd",
      description: "This issue is related to configuration changes.",
    }),
    label({
      name: "Domain: Dev Experience",
      color: "#00bcd4",
      description: "This issue pertains to a developer's emotions and attitudes when building Grey Software.",
    })
  ],
});
