# Changelog

All notable changes to this project will be documented in this file.

## [3.0.1] - 2025-04-16

### Fixed

- Reworked `tet_x_plane!()` to improve tetrahedron-plane-crosssection

## [3.0.0] - 2025-03-03

### Changed

- `marching_triangles` takes now an additional `lines` argument to compute intersections with given lines and
   returns also values and adjacency information to be able to construct a 1D grid
   To restore the old behavior, use `lines = []` and neglect the second and third return value

## [1.1.1] - 2024-11-02
- Update links after move to WIAS-PDELib org

## [1.1.0] - 2023-12-08

- Ensure that colorbarticks makeisolevels always contain the limits

## [1.0.0] - 2023-11-15

- Qualified import
- Format
- V1.0: non-breaking but time for real semver
