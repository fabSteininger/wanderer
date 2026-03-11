<div align="center">

  <img src="web/static/svgs/logo_text_two_line_dark.svg" height="256" width="256">

  <h4>The trail catalogue that makes your GPS data searchable</h4>

[![Docker Image Version (tag latest semver)](https://img.shields.io/github/v/release/open-wanderer/wanderer)](https://github.com/open-wanderer/wanderer/)
[![GitHub Repo stars](https://img.shields.io/github/stars/open-wanderer/wanderer?style=social)](https://github.com/open-wanderer/wanderer/)
[![Buy Me A Coffee](https://img.shields.io/badge/Support-wanderer-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/wanderertrails)
[![Discord](https://img.shields.io/discord/1249895457396621332?style=social&logo=discord&label=Developer%20Discord)](https://discord.gg/USSEBY98CP)

[![Try the demo](https://img.shields.io/badge/Try_the_demo-EF2D5E?style=for-the-badge&logoColor=white&logo=rocket&color=2a56f1&labelColor=242734)](https://demo.wanderer.to)

</div>

wanderer is a self-hosted trail database. You can upload your recorded tracks or create new ones and add various metadata to build an easily searchable catalogue. 

## Core Features

![Screenshot of wanderer](docs/src/assets/hero.png)

- Manage your trails
- Plan new routes
- Extensive map integration and visualization
- Share trails with other people and explore theirs
- Advanced filter and search functionality
- Create custom lists to organize your trails further


## Getting started
The recommended and quickest way to install wanderer is using docker compose:

``` bash
# download the docker compose file
wget https://raw.githubusercontent.com/fabSteininger/wanderer/refs/heads/main/docker-compose.yml

# build and launch via docker compose
docker compose up -d
```

### Docker Registry
The official docker images are available on GitHub Container Registry (GHCR):
- `ghcr.io/fabsteininger/wanderer/wanderer-web:latest`
- `ghcr.io/fabsteininger/wanderer/wanderer-db:latest`

### Routing with BRouter
wanderer supports [BRouter](http://brouter.de/) for offline routing. You can either:
1. Set the `PUBLIC_BROUTER_URL` environment variable in your `docker-compose.yml`.
2. Configure a custom BRouter URL in the user settings under **Settings > Map > Routing**. This is useful if you have a local BRouter instance running (e.g., on http://localhost:17777).

The first startup can take up to 90 seconds after which you can access the frontend at localhost:3000.

> ℹ️ if you are not hosting wanderer at http://localhost:3000 make sure to change ORIGIN variable. Otherwise you will run into CORS errors.

> ⚠️ if you are using wanderer in a production environment make sure to change the MEILI_MASTER_KEY variable.

You can also run wanderer on bare-metal. Check out the [documentation](https://wanderer.to/run/installation/from-source) for a detailed how-to guide.

## Support wanderer

If you like wanderer and would like to give something back you can donate over [here](https://www.buymeacoffee.com/wanderertrails). If you prefer to support the development with a regular contribution you can donate via [Liberapay](https://liberapay.com/wanderer/).

## Documentation

Please check the [website](https://wanderer.to) for the complete documentation.

## Contributing

Help is welcome at any time. If you are not sure where you can start check the [roadmap](https://github.com/users/Flomp/projects/2/views/1) for features in the backlog.
If you would like to contribute a translation, you can do so [here](https://crowdin.com/project/wanderer).

## License
This project is licensed under the AGPLv3 License. See the [LICENSE](LICENSE) file for the full license text.
