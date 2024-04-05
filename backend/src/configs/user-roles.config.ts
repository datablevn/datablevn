import UserRoles from "supertokens-node/recipe/userroles";
import logger from "../utils/logger";
import fs from "fs";
import path from "path";

// This function initializes the user roles at the start of the server.
async function initUserRoles() {
  // Load roles from JSON file
  const rolesFilePath = path.join(__dirname, "../data/roles.json"); // Adjust the path as necessary
  const rolesData = JSON.parse(fs.readFileSync(rolesFilePath, "utf-8"));

  // Check if the user roles are already initialized.
  const existingRoles = await UserRoles.getAllRoles();
  logger.debug(`Existing roles: ${existingRoles.roles.join(", ")}`);

  for (const role of rolesData.roles) {
    // Check if role exists
    if (!existingRoles.roles.includes(role.name)) {
      // Create role if it doesn't exist
      await UserRoles.createNewRoleOrAddPermissions(
        role.name,
        role.permissions
      );
      logger.info(`Role ${role.name} created successfully.`);
    }
  }
}

export default initUserRoles;
