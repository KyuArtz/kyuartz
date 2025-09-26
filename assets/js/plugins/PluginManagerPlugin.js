const PluginManagerPlugin = {
  init(assistant) {
    console.info("Plugin Manager loaded ✅");

    this.enabledPlugins = JSON.parse(localStorage.getItem("meo_plugins") || "{}");

    const originalShowSettings = assistant.showSettings.bind(assistant);

    assistant.showSettings = () => {
      originalShowSettings();

      setTimeout(() => {
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return;

        const panel = modal.querySelector("div");

        const pluginSection = document.createElement("div");
        pluginSection.style.marginTop = "20px";
        pluginSection.innerHTML = `
          <h3 style="margin-bottom: 10px; color: var(--accent-color);">
            <i class="fas fa-plug"></i> Plugins
          </h3>
          <div id="pluginList" style="display: flex; flex-direction: column; gap: 12px;"></div>
        `;
        panel.appendChild(pluginSection);

        const list = pluginSection.querySelector("#pluginList");
        assistant.plugins.forEach((p) => {
          if (p.name && p.onMessage) {
            const id = `plugin_${p.name}`;
            const checked = this.enabledPlugins[p.name] !== false;

            const container = document.createElement("div");
            container.style.cssText = `
              background: var(--secondary-color);
              padding: 10px;
              border-radius: var(--border-stylized);
              box-shadow: var(--shadow);
            `;

            const toggleRow = document.createElement("label");
            toggleRow.style.cssText = `
              display: flex; align-items: center; gap: 8px;
              font-weight: bold;
              cursor: pointer;
            `;
            toggleRow.innerHTML = `
              <input type="checkbox" id="${id}" ${checked ? "checked" : ""}>
              ${p.name}
            `;
            container.appendChild(toggleRow);

            // Plugin description
            if (p.description) {
              const desc = document.createElement("div");
              desc.style.cssText = "font-size: 12px; opacity: 0.7; margin: 6px 0;";
              desc.textContent = p.description;
              container.appendChild(desc);
            }

            // Plugin commands/help
            if (p.commands && p.commands.length > 0) {
              const cmdList = document.createElement("ul");
              cmdList.style.cssText = `
                font-size: 12px; margin: 0; padding-left: 18px; color: var(--accent-color);
              `;
              p.commands.forEach(cmd => {
                const li = document.createElement("li");
                li.textContent = cmd;
                cmdList.appendChild(li);
              });
              container.appendChild(cmdList);
            }

            // Handle toggle change
            toggleRow.querySelector("input").addEventListener("change", (e) => {
              this.enabledPlugins[p.name] = e.target.checked;
              localStorage.setItem("meo_plugins", JSON.stringify(this.enabledPlugins));
              assistant.showNotification(`${p.name} ${e.target.checked ? "enabled" : "disabled"}`, 2000);
            });

            list.appendChild(container);
          }
        });
      }, 100);
    };

    // Respect enabled state
    const originalRunPlugins = assistant.runPlugins.bind(assistant);
    assistant.runPlugins = async (input) => {
      for (const plugin of assistant.plugins) {
        if (plugin.onMessage && this.enabledPlugins[plugin.name] !== false) {
          const handled = await plugin.onMessage(input, assistant);
          if (handled) return true;
        }
      }
      return false;
    };
  }
};
