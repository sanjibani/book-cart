module.exports = {
  name: 'types',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/types',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
