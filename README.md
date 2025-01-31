# Tailwind CSS - Classes Not Applied Due to Incorrect Content Configuration

This repository demonstrates a common issue when using Tailwind CSS: classes not being applied due to an incorrect `content` configuration in `tailwind.config.js`.

## Problem

The provided `tailwind.config.js` only includes specific file extensions in the `content` array.  If your project uses other file types (e.g., `.vue`, `.html`) containing Tailwind directives, the classes defined in those files won't be picked up by Tailwind's build process, resulting in the classes not being applied.

## Solution

To solve this, broaden the scope of the `content` configuration to include all relevant file types.  A more inclusive approach is generally recommended unless you have a specific reason to exclude certain files.

## How to reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install`.
4. You will observe that Tailwind classes in files with unsupported extensions are not applied.
5. Refer to the solution file to see how to fix the issue by updating the `content` array in `tailwind.config.js`.