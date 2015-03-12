export default function() {

  this.transition(
    this.fromRoute('foo'),
    this.toRoute('bar'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('bar'),
    this.toRoute('foo'),
    this.use('crossFade', {})
  );

  this.transition(
    this.toRoute('alpha'),
    this.use('scale')
  );

  this.transition(
    this.toRoute('beta'),
    this.use('scale')
  );

  this.transition(
    this.toRoute('gamma'),
    this.use('scale')
  );

}
