export default (context, inject) => {
  inject('submitFirebaseForm', async (form) => {
    const messageRef = context.$fire.firestore
        .collection('submissions')
        .doc('submissions')
      try {
        await messageRef.set(form)
      } catch (e) {
        throw e
      }
      return
  })
}
