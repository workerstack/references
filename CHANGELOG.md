# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2026-11-10

### Fixed

- Installing the package runs no script: `repo sync` moved from `postinstall`, which npm runs in every consumer's install, to `prepare`, which runs only in this repo.

## [0.1.0] - 2026-11-10

### Added

- `references/INDEX.md` lists every published `@workerstack/*` package (repo, system, database, testing) with its npm page and what it does, one `- [name](url): description` line each, for `@workerstack/repo`'s `repo:available` section.
