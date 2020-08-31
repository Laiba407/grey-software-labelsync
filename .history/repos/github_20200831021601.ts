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
    }),
    label({
      name: "duplicate",
      color: "#cfd3d7",
      description: "This issue or pull request already exists",
    }),
    label({
      name: "enhancement",
      color: "#a2eeef",
      description: "New feature or request",
    }),
    label({
      name: "good first issue",
      color: "#7057ff",
      description: "Good for newcomers",
    }),
    label({
      name: "help wanted",
      color: "#008672",
      description: "Extra attention is needed",
    }),
    label({
      name: "invalid",
      color: "#e4e669",
      description: "This doesn't seem right",
    }),
    label({
      name: "question",
      color: "#d876e3",
      description: "Further information is requested",
    }),
    label({
      name: "wontfix",
      color: "#000000",
      description: "This will not be worked on",
    }),
  ],
});
