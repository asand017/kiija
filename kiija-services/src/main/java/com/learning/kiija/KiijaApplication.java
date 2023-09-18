package com.learning.kiija;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.learning.kiija")
public class KiijaApplication {

	public static void main(String[] args) {
		SpringApplication.run(KiijaApplication.class, args);
	}

}
