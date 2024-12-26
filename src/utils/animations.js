export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationsProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationsProps,
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationsProps,
            ease: 'power2.inOut'
        },
        '<'
    )
}