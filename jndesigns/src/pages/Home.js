import React from 'react'

export default function Home() {
    return (
        <div id="container">
            <div class="row">
                <div class="col-sm-3">


                    <img src="./" class="img-fluid" class="rounded float-left" alt="picture of Jeremy"
                        height="450px" />
                </div>

                {/* bio section  */}
                <div class="col-sm-9" >
                    <p class="text-wrap" class="card-text"> 
                    My name is Jeremy, I was born and raised in Tucson, AZ. I
                    am aspiring to be a full stack Web Developer. Theres something about taking a bunch of text
                    on
                    a
                    screen that looks like gibberish to the average person and turning it into a functioning website or program,
                    almost like magic! I am the kind of person that likes to build
                    things with my hands and implement different ideas on how to build things from scratch or fix things when they
                    break I like to figure out how things work. Since I was a kid I enjoyed computers and gadgets, I would always
                    try to tinker with the settings and see what changed. After I got bored with what the manufacture settings had
                    to offer,
                    a couple of my close friends and I wanted to see what else we can make different devices do, so we did a lot
                    of
                    digging
                    and with some trial and error we were able to basically hack things like the old cellphones and old PSP first gens  , we made custom
                    icons/themes and using the built in IR sensor turned it into a homemade universal remote control,<em>ya know just kid stuff</em>.
                    </p>
                    <p class="text-wrap" class="card-text">
                        Even though i've always had an interest in electronics my main passion growing up has always been in anything that has an
                        engine and a gas tank.
                        I taught
                        myself how to fix and build old dirt-bikes an ATV's, until I got older and started building and modifying my
                        own cars. The skills i've learned working
                        in the automotive industry are similar to the type of skills used in coding, such as debugging and diagnosing
                        problems
                        through either reverse engineering or rebuilding from scratch, and to me both are kinda like building a very
                        complex puzzle that you really need
                        to be able to visualize and experiment as you build.
                    </p>
                </div>
            </div>
        </div>
    )
}
