provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "example_large" {
  ami           = "ami-0287a05f0ef0e9d9a"
  instance_type = "t3.large"
  key_name      = "Pranav"
  vpc_security_group_ids = ["sg-05d5516638a0e6f2d"]

  user_data = <<-EOF
              #!/bin/bash
              sudo apt-get update
              sudo apt-get install -y docker.io git apache2
              sudo systemctl start docker
              sudo systemctl enable docker
              sudo systemctl start apache2
              sudo systemctl enable apache2
              EOF

  tags = {
    Name = "2ec2ap"
  }
}

resource "aws_instance" "example_micro" {
  ami           = "ami-0287a05f0ef0e9d9a"
  instance_type = "t3.micro"
  key_name      = "Pranav"
  vpc_security_group_ids = ["sg-05d5516638a0e6f2d"]

  user_data = <<-EOF
              #!/bin/bash
              sudo apt-get update
              sudo apt-get install -y docker.io git apache2
              sudo systemctl start docker
              sudo systemctl enable docker
              sudo systemctl start apache2
              sudo systemctl enable apache2
              EOF

  tags = {
    Name = "3ec2ap"
  }
}


# Output variables to display public IP addresses of the instances
output "instance_2ec2ap_public_ip" {
  value = aws_instance.example_large.public_ip
  description = "The public IP of the 2ec2ap instance"
}

output "instance_3ec2ap_public_ip" {
  value = aws_instance.example_micro.public_ip
  description = "The public IP of the 3ec2ap instance"
}
